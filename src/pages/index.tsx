import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import Header from '../components/pattern/Header'
import Footer from '../components/pattern/Footer'

const FirstSection = styled.section`
  background-image: url('/home/MainFoto.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 530px;
  position: relative;

  .detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  .actionButton {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.txtPrimary};
    font-size: 36px;
    position: absolute;
    left: 220px;
    bottom: 125px;
  }

  .coins {
    position: absolute;
    left: calc(50vw - (254px));
    bottom: -254px;
  }
`

const SecondSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  .firstBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 254px;
    flex: 1;
    max-width: 608px;
    height: 620px;
    &:first-child {
      margin-right: 2rem;
    }
    img {
      display: block;
    }
    h2 {
      margin: 0;
      display: block;
      font-weight: bold;
      font-size: 36px;
      color: ${({ theme }) => theme.colors.primary};
      text-align: center;
    }
  }
`

const ThirdSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 690px;
  max-width: 1350px;
  padding: 2rem;
  margin: 2rem auto;
  background: linear-gradient(${({ theme }) => theme.colors.secondary}, transparent);
  color: ${({ theme }) => theme.colors.txtPrimary};
  text-align: center;

  .firstBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    max-width: 608px;
    height: 620px;
    &:first-child {
      margin-right: 2rem;
    }
    img {
      display: block;
    }
    h2 {
      margin: 0;
      display: block;
      font-weight: bold;
      font-size: 36px;
      color: ${({ theme }) => theme.colors.txtPrimary};
      text-align: center;
    }
  }
`

const FourthSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 690px;
  max-width: 1350px;
  padding: 2rem;
  margin: 2rem auto;
  color: ${({ theme }) => theme.colors.txtPrimary};
  text-align: center;

  .firstBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    max-width: 608px;
    height: 620px;
    &:first-child {
      margin-right: 2rem;
    }
    img {
      width: 536px;
      height: 384px;
    }
    h2 {
      margin: 0;
      display: block;
      font-weight: bold;
      font-size: 36px;
      color: ${({ theme }) => theme.colors.primary};
      text-align: center;
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      width: 70%;
      img {
        width: 48px;
        height: 48px;
      }
      p {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 24px;
      }
    }
  }
  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.txtPrimary};
    font-size: 24px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    padding: 0.75rem 3rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.45);
    &:focus {
      outline: 0;
    }
    &:active {
      box-shadow: none;
      background-color: ${({ theme }) => darken('0.05', theme.colors.primary)};
    }
  }
`

const GreenCard = styled.div`
  background-color: ${({ theme }) => theme.colors.ternary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.txtPrimary};
  padding: 2rem;
  border-radius: 8px;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      color: inherit;
      font-size: 32px;
    }
  }
  p {
    font-size: 21px;
    text-align: center;
  }
`

const PickCard = styled.div<{ img: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 509px;
  height: 281px;
  padding: 0.5rem;
  &:after {
    content: '';
  }
  h2 {
    color: ${({ theme }) => theme.colors.txtPrimary};
    font-weight: bold;
    font-size: 33px;
    text-align: center;
  }
`

const Index = (): JSX.Element => {
  return (
    <div>
      <Header />
      <FirstSection>
        <img src="/home/MOEDAS.png" alt="" className="coins" />
        <img src="/home/VectorLogoR4.png" alt="" className="detail" />
        <div className="actionButton">
          <span>
            Câmbio
            <br />
            Descomplicado
          </span>
          <button
            type="button"
            className="primary-button"
            onClick={() => {
              console.log('click')
            }}
          >
            Eu quero
          </button>
        </div>
      </FirstSection>
      <SecondSection>
        <div className="firstBlock">
          <h2>As melhores oportunidades de câmbio em um só lugar!</h2>
          <img src="/home/main.png" alt="top of the world" />
        </div>
        <div className="firstBlock">
          <GreenCard>
            <div className="title">
              <img src="/home/empresa.svg" alt="Empresa" />
              <h2>PARA SUA EMPRESA</h2>
            </div>
            <p>
              Câmbio pronto, hedge e câmbio futuro, ACC, ACE, FINIMP, recebimento de exportações,
              trade finance e pagamentos.
            </p>
          </GreenCard>
          <GreenCard>
            <div className="title">
              <img src="/home/homem.svg" alt="Você" />
              <h2>PARA VOCÊ</h2>
            </div>
            <p>
              Tranferências internacionais, moeda em espécie, moneygram, seguro viagem, chip
              internacional, cartão pré-pago e google adsense.
            </p>
          </GreenCard>
        </div>
      </SecondSection>
      <ThirdSection>
        <div className="firstBlock">
          <h2>A informação que vale ouro!</h2>
          <h2>Notícias atualizadas e comentadas pelo nosso time de especialistas.</h2>
          <img src="/home/notebook.png" alt="top of the world" />
        </div>
        <div className="firstBlock">
          <PickCard img="/home/building.png">
            <h2>Entenda porque o dólar influência o mercado de câmbio!</h2>
          </PickCard>
          <PickCard img="/home/coffee.png">
            <h2>Um checklist completo para os seus primeiros passos no mercado de câmbio.</h2>
          </PickCard>
        </div>
      </ThirdSection>
      <FourthSection>
        <div className="firstBlock">
          <h2>Seja bem vindo ao nosso escritório, entre para conhecer a R4 Câmbio.</h2>
          <img src="/home/come.png" alt="top of the world" />
          <h2>
            Preparamos um material especial para você entender o que nos faz diferente e porque você
            pode confiar em nós.
          </h2>
        </div>
        <div className="firstBlock">
          <h2>5 MOTIVOS PARA VOCÊ NOS CONHECER MELHOR!</h2>
          <div className="item">
            <img src="home/check.svg" alt="" />
            <p>Mais de 1000 clientes atendidos</p>
          </div>
          <div className="item">
            <img src="home/check.svg" alt="" />
            <p>Mais de 100 milhões de dólares movimentados</p>
          </div>
          <div className="item">
            <img src="home/check.svg" alt="" />
            <p>Resultados comprovados</p>
          </div>
          <div className="item">
            <img src="home/check.svg" alt="" />
            <p>Um time de especialistas</p>
          </div>
          <div className="item">
            <img src="home/check.svg" alt="" />
            <p>Assessoria personalizada</p>
          </div>
          <button type="button"> quero entrar e conhecer</button>
        </div>
      </FourthSection>
      <Footer />
    </div>
  )
}

export default Index
