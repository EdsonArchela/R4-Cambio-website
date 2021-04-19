/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { useRouter } from 'next/dist/client/router'
import {
  Bar,
  FirstSection,
  FourthSection,
  Main,
  SecondSection,
  ThirdSection,
  WhiteSlide,
} from '../styles/enterprise'
import Slide from '../components/Carousel/Slide'
import CustomArrow from '../components/CustomArrow'

const Enterprise: React.FC = () => {
  const route = useRouter()
  const [width, setWidth] = React.useState(0)
  const [mobile, setMobile] = React.useState(false)
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  })

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('resize', () => setWidth(window.innerWidth))
      if (window.innerWidth > 1024) {
        setMobile(false)
        setSliderSettings((prev) => ({ ...prev, slidesToShow: 3 }))
      }

      if (window.innerWidth <= 1024) {
        setMobile(false)
        setSliderSettings((prev) => ({ ...prev, slidesToShow: 2 }))
      }
      if (window.innerWidth <= 768) {
        setMobile(true)
        setSliderSettings((prev) => ({ ...prev, slidesToShow: 1, arrows: false, autoplay: true }))
      }
    }
  }, [width])

  return (
    <>
      <Main>
        <div className="background">
          <div className="action">
            <div className="textBlock">
              <h2>
                Soluções
                <br />
                Corporativas
              </h2>
              {!mobile && (
                <p>
                  Tudo que sua empresa procura de uma forma simplificada com resultados comprovados.
                  Nunca foi tão fácil operar no mercado de câmbio.
                </p>
              )}
            </div>
          </div>
          {mobile && (
            <p>
              Tudo que sua empresa procura de uma forma simplificada com resultados comprovados.
              Nunca foi tão fácil operar no mercado de câmbio.
            </p>
          )}
          <button
            type="button"
            className="primary-button"
            onClick={() => {
              console.log('Gostaria de saber mais')
            }}
          >
            QUERO SABER MAIS
          </button>
        </div>
        <Bar />
      </Main>
      {mobile && <Bar />}
      <FirstSection>
        <h2>Operações seguras para sua empresa!</h2>
        <div className="carousel">
          <Slider {...sliderSettings}>
            <Slide
              content={{
                image: '/enterprise/cambio-pronto.png',
                title: 'Câmbio Pronto',
                slug: 'cambio-pronto',
              }}
            />

            <Slide
              content={{
                image: '/enterprise/cambio-futuro.png',
                title: 'Hedge e Câmbio Futuro',
                slug: 'cambio-futuro',
              }}
            />

            <Slide content={{ image: '/enterprise/ace.png', title: 'ACE', slug: 'ace' }} />

            <Slide content={{ image: '/enterprise/acc.png', title: 'ACC', slug: 'acc' }} />

            <Slide content={{ image: '/enterprise/finimp.png', title: 'FINIMP', slug: 'finimp' }} />
          </Slider>
        </div>
      </FirstSection>
      <Bar />
      <SecondSection>
        <Image src="/enterprise/Mockup celular.png" alt="FINIMP" width="361px" height="707px" />
        <div className="main">
          <button
            type="button"
            className="item active"
            onClick={(event) => {
              event.currentTarget.classList.toggle('active')
              document.getElementById('modalidades')?.classList.toggle('active')
            }}
          >
            <Image src="/assets/arrow.png" width={16} height={16} className="arrow-right" />
            <p>Modalidades</p>
          </button>
          <div className="description active" id="modalidades">
            <p>
              <strong>Finimp Direto</strong>: é o financiamento obtido diretamente junto a uma
              instituição de crédito no exterior para o importador brasileiro.
            </p>
            <p>
              <strong>Finimp Repasse</strong>: é o financiamento obtido por uma instituição de
              crédito brasileira junto a uma instituição de crédito estrangeira. Nessa modalidade, o
              banco ou instituição de crédito brasileira repassa o capital para o importador local.
            </p>
          </div>
          <button
            type="button"
            className="item"
            onClick={(event) => {
              event.currentTarget.classList.toggle('active')
              document.getElementById('requisitos')?.classList.toggle('active')
            }}
          >
            <Image src="/assets/arrow.png" width={16} height={16} className="arrow-right" />
            <p>Requisitos</p>
          </button>
          <ul className="description" id="requisitos">
            <li>A empresa deve possuir conta na instituição a qual pretenda contratar o Finimp;</li>
            <li>
              A instituição de crédito deve aprovar a operação do Finimp com base na movimentação e
              histórico da empresa importadora;
            </li>
            <li>
              Possuir a operação em andamento, bem como os respectivos documentos da importação.
            </li>
          </ul>
          <button
            type="button"
            className="item"
            onClick={(event) => {
              event.currentTarget.classList.toggle('active')
              document.getElementById('prazos')?.classList.toggle('active')
            }}
          >
            <Image src="/assets/arrow.png" width={16} height={16} className="arrow-right" />
            <p>Prazos</p>
          </button>
          <p className="description" id="prazos">
            Prazo de até 360 dias para começar a pagar;
          </p>
          <button
            type="button"
            className="item"
            onClick={(event) => {
              event.currentTarget.classList.toggle('active')
              document.getElementById('tributacao')?.classList.toggle('active')
            }}
          >
            <Image src="/assets/arrow.png" width={16} height={16} className="arrow-right" />
            <p>Tributação</p>
          </button>
          <ul className="description" id="tributacao">
            <li>
              <strong>Finimp Direto</strong>: incide IR (Imposto de Renda) sobre o pagamento de
              juros ao exterior. Não incide IOF (Imposto sobre Operações Financeiras) nessa
              modalidade.
            </li>
            <li>
              <strong>Finimp Repasse</strong>: incide IOF tendo em vista a operação de crédito. Não
              incide IR.
            </li>
          </ul>
          <button
            type="button"
            className="item"
            onClick={(event) => {
              event.currentTarget.classList.toggle('active')
              document.getElementById('vantagens')?.classList.toggle('active')
            }}
          >
            <Image src="/assets/arrow.png" width={16} height={16} className="arrow-right" />
            <p>Vantagens</p>
          </button>
          <ul className="description" id="vantagens">
            <li>
              Financiamento pode chegar a 100% do valor da importação, incluindo despesas locais com
              o desembaraço da mercadoria;
            </li>
            <li>
              Não há restrições em relação a prazo mínimo ou máximo para as operações, as quais são
              baseadas na documentação de importação. O prazo máximo pode chegar a dez anos;
            </li>
            <li>
              A periodicidade para quitar a parcela de juros é livremente acordada após o embarque
              da mercadoria;
            </li>
            <li>
              Taxas de juros praticadas no mercado internacional. Nos últimos anos, a média dessa
              taxa de juros ficou em menos de 4% ao ano.
            </li>
          </ul>
        </div>
        <div className="action">
          <p>Consulte agora um dos nossos especialistas. Vamos esclarecer todas as suas dúvidas.</p>
          <button
            type="button"
            className="primary-button"
            onClick={() => {
              route.push('/contact')
            }}
          >
            consultar especialista
          </button>
        </div>
      </SecondSection>
      <ThirdSection>
        <div className="content">
          <div className="title">
            <img src="/enterprise/agro-icon.png" alt="Agro" />
            <div className="">
              <h2>O poder do câmbio no agronegócio!</h2>
              <p>As melhores soluções em câmbio para o agronegócio.</p>
              <p>Segurança nas operações e lucro recorrente para sua empresa.</p>
            </div>
          </div>
          <div className="carousel">
            <Slider {...sliderSettings}>
              <WhiteSlide>
                <img src="/enterprise/export.svg" alt="Exportação" />
                <h2>Recebimentos de exportações</h2>
                <p>
                  As melhores soluções em câmbio para o agronegócio. Segurança nas operações e lucro
                  recorrente para sua empresa.
                </p>
              </WhiteSlide>
              <WhiteSlide>
                <img src="/enterprise/hedge.svg" alt="Hedge" />
                <h2>Operações de Hedge Cambial</h2>
                <p>
                  As melhores soluções em câmbio para o agronegócio. Segurança nas operações e lucro
                  recorrente para sua empresa.
                </p>
              </WhiteSlide>
              <WhiteSlide>
                <img src="/enterprise/marginCall.svg" alt="Margin Call" />
                <h2>Pagamentos e recebimentos de Margin Call</h2>
                <p>
                  As melhores soluções em câmbio para o agronegócio. Segurança nas operações e lucro
                  recorrente para sua empresa.
                </p>
              </WhiteSlide>
              <WhiteSlide>
                <img src="/enterprise/tradeFinance.svg" alt="Trade Finance" />
                <h2>Trade Finance</h2>
                <p>
                  As melhores soluções em câmbio para o agronegócio. Segurança nas operações e lucro
                  recorrente para sua empresa.
                </p>
              </WhiteSlide>
              <WhiteSlide>
                <img src="/enterprise/accAce.svg" alt="Contratação" />
                <h2>Contratação ACC, ACE</h2>
                <p>
                  As melhores soluções em câmbio para o agronegócio. Segurança nas operações e lucro
                  recorrente para sua empresa.
                </p>
              </WhiteSlide>
            </Slider>
          </div>
        </div>
      </ThirdSection>
      <Bar />
      <FourthSection>
        <h2>Você sabe a importância de uma assessoria especializada competente?</h2>
        <div className="content">
          <img src="/enterprise/assessoria.png" alt="Assessoria" />
          <div className="">
            <p>
              A assessoria especializada em câmbio auxilia na compra e venda de moedas, remessas
              internacionais, importação, exportação, proteção cambial e outras soluções
              corporativas.
            </p>
            <p>
              Dessa forma, você e sua empresa contam com orientação personalizada para alcançar os
              melhores objetivos.
            </p>
            <p>
              O papel do assessor é, com uma visão atualizada do cenário político/econômico
              envolvido nas operações individuais de cada empresa, sugerir os melhores produtos e
              auxiliar nos trâmites operacionais para que o cliente possa se preocupar com o que faz
              melhor, gerir sua empresa.
            </p>
            <p>
              Para isso você pode contar com as competências específicas do nosso time de
              especialistas.
            </p>

            <button
              type="button"
              onClick={() => {
                route.push('/contact')
              }}
            >
              consultar especialista
            </button>
          </div>
        </div>
      </FourthSection>
    </>
  )
}

export default Enterprise
