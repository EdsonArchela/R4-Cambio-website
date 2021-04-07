/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
    z-index: 1;
  }

  @media (max-width: 1024px) {
    .actionButton {
      position: relative;
      align-items: center;
      justify-content: center;
      height: 100%;
      left: unset;
      bottom: unset;
      background: rgba(0, 0, 0, 0.6);
      .primary-button {
        padding: 0.5rem 4rem;
      }
    }
    .coins {
      width: calc(100vw / 4);
      left: calc(50vw - (calc(100vw / 8)));
      bottom: calc(-100vw / 8);
    }
  }

  @media (max-width: 480px) {
    .coins {
      width: calc(100vw / 2);
      left: calc(50vw - (calc(100vw / 4)));
      bottom: calc(-100vw / 4);
    }
  }
`

const SecondSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  margin: auto;
  margin-top: 254px;
  .firstBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    max-width: 608px;
    height: 620px;
    overflow: hidden;
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

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;

    .firstBlock {
      margin-top: calc(100vw / 8);
      height: unset;
      #topOfWorldImg {
        width: calc(100vw / 3);
      }

      h2 {
        font-size: 1.8rem;
      }
    }
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    .firstBlock {
      margin-top: 1rem;
      justify-content: center;
      &:first-child {
        margin-top: calc(100vw / 4);
        margin-right: 0;
      }
      #topOfWorldImg {
        width: 290px;
      }
      h2 {
        font-size: 24px;
      }
    }
  }
`

const ThirdSection = styled.section`
  height: 690px;
  width: 100%;
  padding: 2rem 0;
  margin: 3rem auto;
  background: linear-gradient(${({ theme }) => theme.colors.secondary}, transparent);
  color: ${({ theme }) => theme.colors.txtPrimary};
  text-align: center;

  .content {
    max-width: 1024px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

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

  .mobile {
    display: none;
  }

  @media (max-width: 1024px) {
    .content {
      width: 90%;
      #notebookImg {
        width: 550px;
      }
      h2 {
        font-size: 28px;
      }
    }
  }

  @media (max-width: 480px) {
    .mobile {
      display: unset;
    }
    .notMobile {
      display: none;
    }
    height: 100%;
    .content {
      width: 100%;
      flex-direction: column;
    }

    .firstBlock {
      width: 80%;
      justify-content: center;
      height: 100%;
      h2 {
        font-size: 20px;
      }
      &:first-child {
        margin-right: 0;
      }
      #notebookImg {
        width: 80%;
      }
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
  @media (max-width: 1024px) {
    .firstBlock {
      h2 {
        font-size: 28px;
      }
      .item {
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    height: 100%;
    width: 80%;
    padding: 0;
    .firstBlock {
      width: 100%;
      &:first-child {
        margin-right: 0;
      }
      img {
        width: 100%;
        height: unset;
      }
      h2 {
        font-size: 20px;
        margin: 1rem 0;
      }
      .item {
        img {
          width: 28px;
          height: 28px;
          margin-right: 1rem;
        }
        p {
          font-size: 14px;
        }
      }
    }
    button {
      margin-top: 1rem;
      font-size: 14px;
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

  &:first-child {
    margin-bottom: 1.5rem;
  }

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

  @media (max-width: 1024px) {
    .title {
      img {
        width: 40px;
      }
      h2 {
        padding-left: 1rem;
        font-size: 1.4rem;
      }
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 290px;
    box-sizing: border-box;
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
  display: flex !important;
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
  @media (max-width: 480px) {
    h2 {
      max-width: 80%;
    }
    .slick-slide {
      margin: 0 27px;
    }
    .slick-track {
      border-radius: 10px;
    }
    /* the parent */
    .slick-list {
      margin: 0 -27px;
    }
  }
`

const Index = (): JSX.Element => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  }
  return (
    <div style={{ overflow: 'hidden' }}>
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
          <img src="/home/main.png" alt="top of the world" id="topOfWorldImg" />
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
        <div className="content">
          <div className="firstBlock">
            <div className="">
              <h2>A informação que vale ouro!</h2>
              <h2>Notícias atualizadas e comentadas pelo nosso time de especialistas.</h2>
            </div>
            <img src="/home/notebook.png" alt="notebook" id="notebookImg" />
          </div>
          <div className="firstBlock notMobile">
            <PickCard img="/home/building.png">
              <h2>Entenda porque o dólar influência o mercado de câmbio!</h2>
            </PickCard>
            <PickCard img="/home/coffee.png">
              <h2>Um checklist completo para os seus primeiros passos no mercado de câmbio.</h2>
            </PickCard>
          </div>
          <div className="firstBlock mobile">
            <Slider {...sliderSettings} style={{ width: '100%' }}>
              <PickCard img="/home/building.png">
                <h2>Entenda porque o dólar influência o mercado de câmbio!</h2>
              </PickCard>
              <PickCard img="/home/coffee.png">
                <h2>Um checklist completo para os seus primeiros passos no mercado de câmbio.</h2>
              </PickCard>
            </Slider>
          </div>
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
