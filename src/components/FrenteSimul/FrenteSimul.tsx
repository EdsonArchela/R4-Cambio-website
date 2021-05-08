/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import { Container, Costs, Currency, Options, Recipient, RemiType, Simulator } from './styles'

const flagsIcons = {
  USD: {
    name: 'Dólar Americano',
    flag: 'https://s3.amazonaws.com/frente-exchanges/flags/united-states.svg',
  },
  EUR: {
    name: 'Euro',
    flag: 'https://s3.amazonaws.com/frente-exchanges/flags/european-union.svg',
  },
  GBP: {
    name: 'Libra Esterlina',
    flag: 'https://s3.amazonaws.com/frente-exchanges/flags/united-kingdom.svg',
  },
  CAD: {
    name: 'Dólar Canadense',
    flag: 'https://s3.amazonaws.com/frente-exchanges/flags/canada.svg',
  },
  AUD: {
    name: 'Dólar Australiano',
    flag: 'https://s3.amazonaws.com/frente-exchanges/flags/australia.svg',
  },
  BRL: {
    name: 'Real',
    flag: 'https://s3.amazonaws.com/frente-exchanges/flags/brazil.svg',
  },
}

export interface SimulationInputs {
  type: 'envio' | 'recebimento'
  currency: 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'BRL'
  toWho: string
  value: number
}

interface Total {
  divisor: number
  value: number
}

interface Simulation {
  createdAt: string
  updatedAt: string
  currency: {
    code: string
    name: string
    commercialExchangeRate: {
      divisor: number
      updatedAt: string
      value: number
    }
    countryFlagUrl: string
    levelingRate: Total
    maxValue: number
    minValue: number
    offer: Total
    price: {
      withoutTax: Total
      withTax: Total
      withFutureTax: Total
    }
    spreadPercentage: 0
  }
  futureTax: {
    ir: {
      percentage: number
      total: Total
    }
  }
  tax: {
    bankFee: {
      valueUSD: string
      total: Total
    }
    iof: {
      percentage: number
      total: Total
    }
  }
  total: {
    withoutTax: Total
    withTax: Total
    withFutureTax: Total
  }
  timeToLive: number
}

let lastCurrency = 0.0

const FrenteSimul = (): JSX.Element => {
  const route = useRouter()

  const [realValue, setRealValue] = useState('R$ 1000,00')
  const [currencyValue, setCurrencyValue] = useState<string>()

  const [simInput, setSimInput] = useState<SimulationInputs>({
    type: 'envio',
    currency: 'USD',
    toWho: 'IR002',
    value: 0,
  })

  const [simulation, setSimulation] = useState<Simulation>()

  const updateReal = useCallback(
    (n_real: number): boolean => {
      if (n_real !== simInput.value)
        axios
          .get(
            `https://api.frentecorretora.com.br/v1/exchanges/remittance/${
              simInput.type === 'envio' ? 'outbound' : 'inbound'
            }/reverse/?purposeCode=${simInput.toWho}&currency=${
              simInput.currency
            }&correspondentId=26&value=${n_real * 100}`
          )
          .then((response) => {
            setSimulation(response.data)
            setSimInput((prev) => ({
              ...prev,
              value: n_real,
            }))
            setCurrencyValue(
              (response.data.currency.offer.value / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: simInput.currency,
              })
            )
            lastCurrency = response.data.currency.offer.value / 100
            return true
          })
      return false
    },
    [simInput.currency, simInput.toWho, simInput.type, simInput.value]
  )

  const updateCurrency = useCallback(
    (n_currency: number) => {
      axios
        .get(
          `https://api.frentecorretora.com.br/v1/exchanges/remittance/${
            simInput.type === 'envio' ? 'outbound' : 'inbound'
          }/?purposeCode=${simInput.toWho}&currency=${simInput.currency}&correspondentId=26&value=${
            n_currency * 100
          }`
        )
        .then((response) => {
          setSimulation(response.data)
          setSimInput((prev) => ({
            ...prev,
            value: response.data.total.withTax.value / 100,
          }))
          setRealValue(
            (response.data.total.withTax.value / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          )
        })
    },
    [simInput.currency, simInput.toWho, simInput.type]
  )

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const n_real = Number(realValue.replace('R$', '').replace('.', '').replace(',', '.'))
      const n_currency = Number(
        currencyValue?.replace(' ', '#').split('#').pop()?.replace('.', '').replace(',', '.')
      )
      let realFixed = false
      if (n_real > 0) realFixed = updateReal(n_real)
      if (n_currency > 0 && !realFixed && n_currency !== lastCurrency) {
        updateCurrency(n_currency)
        lastCurrency = n_currency
      }
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [currencyValue, realValue, updateCurrency, updateReal])

  return (
    <Container>
      <Options>
        <RemiType>
          <h1 className="h1class">Tipo de remessa</h1>
          <input
            type="radio"
            name="group1[]"
            checked={simInput.type === 'envio'}
            value="envio"
            onChange={() => {
              setSimInput((prev) => ({
                ...prev,
                type: 'envio',
              }))
            }}
          />
          Enviar |
          <input
            type="radio"
            name="group1[]"
            value="recebimento"
            checked={simInput.type === 'recebimento'}
            onChange={() => {
              setSimInput((prev) => ({
                ...prev,
                type: 'recebimento',
              }))
            }}
          />
          Receber
        </RemiType>
        <Recipient>
          <h1 className="h1class">Para quem enviará?</h1>
          <select
            name="toWho"
            onChange={(e) => {
              const val = e.currentTarget.value
              setSimInput((prev) => ({ ...prev, toWho: val }))
            }}
          >
            <option value="IR002">Outra pessoa</option>
            <option value="IR001">Eu mesmo</option>
            {simInput.type === 'envio' ? (
              <>
                <option value="SERVICES">Pagamento de serviços</option>
                <option value="IR002">Pagamento de estudos</option>
              </>
            ) : (
              <option value="IR002">Eu mesmo - Google AdSense</option>
            )}
          </select>
        </Recipient>
      </Options>
      <Simulator>
        <Currency>
          <div className="flag">
            {simInput.type === 'envio' ? (
              <>
                <img src={flagsIcons.BRL.flag} alt={flagsIcons.BRL.name} />
                <span>{flagsIcons.BRL.name}</span>
              </>
            ) : (
              <>
                <img
                  src={flagsIcons[simInput.currency].flag}
                  alt={flagsIcons[simInput.currency].name}
                />
                <select
                  name="currencies"
                  onChange={(event) => {
                    const val = event.currentTarget.value
                    if (['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'BRL'].includes(val))
                      setSimInput((prev) => ({
                        ...prev,
                        currency: val as 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'BRL',
                      }))
                    else {
                      setSimInput((prev) => ({ ...prev, currency: 'USD' }))
                    }
                  }}
                >
                  <option value="USD">{flagsIcons.USD.name}</option>
                  <option value="EUR">{flagsIcons.EUR.name}</option>
                  <option value="GBP">{flagsIcons.GBP.name}</option>
                  <option value="CAD">{flagsIcons.CAD.name}</option>
                  <option value="AUD">{flagsIcons.AUD.name}</option>
                </select>
              </>
            )}
          </div>
          <div className="value">
            <input
              type="text"
              value={simulation && (simInput.type === 'envio' ? realValue : currencyValue)}
              onChange={(event) => {
                if (simInput.type === 'envio') setRealValue(event.currentTarget.value)
                else {
                  setCurrencyValue(event.currentTarget.value)
                }
              }}
            />
          </div>
        </Currency>
        <Costs>
          <ul>
            <li>
              <div className="info">i</div> Cotação ={' '}
              {simulation &&
                (
                  simulation.currency.commercialExchangeRate.value /
                  simulation.currency.commercialExchangeRate.divisor
                ).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 4,
                })}
            </li>
            <li>
              <div className="info">i</div> Tarifa Bancária ={' '}
              {simulation &&
                (
                  simulation.tax.bankFee.total.value / simulation.tax.bankFee.total.divisor
                ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </li>
            <li>
              <div className="info">i</div> IOF ({simulation?.tax.iof.percentage}%) ={' '}
              {(
                (simulation?.tax.iof.total.value || 1) / (simulation?.tax.iof.total.divisor || 1)
              ).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              {simInput.toWho === 'SERVICES' && ' + IR'}
            </li>
            <li>
              <div className="info">i</div> VET ={' '}
              {(
                (simulation?.currency.price.withTax.value || 1) /
                (simulation?.currency.price.withTax.divisor || 1)
              ).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 4,
              })}
            </li>
          </ul>
        </Costs>
        <Currency>
          <div className="flag">
            {simInput.type !== 'envio' ? (
              <>
                <img src={flagsIcons.BRL.flag} alt={flagsIcons.BRL.name} />
                <span>{flagsIcons.BRL.name}</span>
              </>
            ) : (
              <>
                <img
                  src={flagsIcons[simInput.currency].flag}
                  alt={flagsIcons[simInput.currency].name}
                />
                <select
                  name="currencies"
                  onChange={(event) => {
                    const val = event.currentTarget.value
                    if (['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'BRL'].includes(val))
                      setSimInput((prev) => ({
                        ...prev,
                        currency: val as 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'BRL',
                      }))
                    else {
                      setSimInput((prev) => ({ ...prev, currency: 'USD' }))
                    }
                  }}
                >
                  <option value="USD">{flagsIcons.USD.name}</option>
                  <option value="EUR">{flagsIcons.EUR.name}</option>
                  <option value="GBP">{flagsIcons.GBP.name}</option>
                  <option value="CAD">{flagsIcons.CAD.name}</option>
                  <option value="AUD">{flagsIcons.AUD.name}</option>
                </select>
              </>
            )}
          </div>
          <div className="value">
            <input
              type="text"
              value={simulation && (simInput.type !== 'envio' ? realValue : currencyValue)}
              onChange={(event) => {
                if (simInput.type !== 'envio') setRealValue(event.currentTarget.value)
                else {
                  setCurrencyValue(event.currentTarget.value)
                }
              }}
            />
          </div>
        </Currency>
        <button
          type="button"
          className="primary-button"
          onClick={() => {
            route.push({
              pathname: '/transaction',
              query: { ...simInput },
            })
          }}
        >
          SIMULAR AGORA
        </button>
      </Simulator>
    </Container>
  )
}

export default FrenteSimul
