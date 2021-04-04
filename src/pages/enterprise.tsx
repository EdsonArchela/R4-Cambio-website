/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Header from '../components/pattern/Header'
import Footer from '../components/pattern/Footer'
import Slide from '../components/Carousel/Slide'

const Main = styled.main`
  background-image: url('/enterprise/suit.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0;
  width: 100%;
  height: 602px;
  position: relative;
  .action {
    position: absolute;
    top: 161px;
    left: 177px;
    color: ${({ theme }) => theme.colors.txtPrimary};

    h2 {
      font-size: 48px;
      font-weight: bold;
    }

    p {
      max-width: 365px;
      font-size: 24px;
    }

    .primary-button {
      font-size: 24px;
    }
  }
`

const Bar = styled.div`
  margin: 0;
  height: 11px;
  width: 100%;
  background: linear-gradient(
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.quaternary}
  );
`

const FirstSection = styled.section`
  max-width: 1620px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};

  .carousel {
    width: 80%;
    margin: 2rem auto;
  }
`
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <button
      type="button"
      className={className}
      style={{ ...style, display: 'block', height: '68px' }}
      onClick={onClick}
    >
      <img src="/assets/carousel/rightarrow.svg" alt="next" />
    </button>
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <button
      type="button"
      className={className}
      style={{ ...style, display: 'block', height: '68px' }}
      onClick={onClick}
    >
      <img src="/assets/carousel/leftarrow.svg" alt="previous" />
    </button>
  )
}

const SecondSection = styled.section`
  max-width: 1420px;
  margin: 2rem auto;

  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    flex: 1;
    margin: 4rem;
  }

  .main {
    .item {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      padding: 1rem;
      .arrow-right {
        width: 0;
        height: 0;
        border-top: 25px solid transparent;
        border-bottom: 25px solid transparent;

        border-left: 16px solid ${({ theme }) => theme.colors.primary};

        padding-left: 5rem;

        display: flex;
        align-items: center;
        justify-content: center;

        color: ${({ theme }) => theme.colors.primary};
        font-size: 24px;
      }
    }
  }
  .action {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 40px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};
    }
    button {
      color: ${({ theme }) => theme.colors.txtPrimary};
      font-size: 20px;
      font-weight: bold;
    }
  }
`

const ThirdSection = styled.section`
  max-width: 1620px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url('/enterprise/backcoin.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .title {
    margin-top: 86px;
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary};
    img {
      padding-right: 2rem;
    }
    h2 {
      margin: 0 0 1rem 0;
      text-align: center;
      font-size: 40px;
      font-weight: bold;
    }
    p {
      text-align: center;
      font-size: 24px;
      margin: 0;
    }
  }

  .carousel {
    width: 80%;
    margin: 2rem auto;
    margin-bottom: 83px;
  }
`
const WhiteSlide = styled.div`
  background: rgba(255, 255, 255, 0.8);
  display: flex !important;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 265px !important;
  height: 532px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 3rem 2rem;
  margin: auto;
  img {
    width: 88px;
    height: 88px;
  }
  h2 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  p {
    font-size: 22px;
    text-align: center;
  }
`

const FourthSection = styled.section`
  width: 1220px;
  margin: 5rem auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  color: ${({ theme }) => theme.colors.txtPrimary};
  h2 {
    color: ${({ theme }) => theme.colors.txtPrimary};
    font-size: 48px;
    font-weight: bold;
  }

  p {
    font-size: 23px;
  }

  img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
    margin-right: 1rem;
    width: 445px;
    height: 484px;
  }

  button {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: bold;
    padding: 0.5rem 4rem;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const enterprise = (): JSX.Element => {
  const sliderSettings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <div>
      <Header />
      <Main>
        <div className="action">
          <h2>
            Soluções
            <br />
            Corporativas
          </h2>
          <p>
            Tudo que sua empresa procura de uma forma simplificada com resultados comprovados. Nunca
            foi tão fácil operar no mercado de câmbio.
          </p>
          <button type="button" className="primary-button">
            QUERO SABER MAIS
          </button>
        </div>
      </Main>
      <Bar />
      <FirstSection>
        <h2>Operações seguras para sua empresa!</h2>
        <div className="carousel">
          <Slider {...sliderSettings}>
            <Slide content={{ image: '/enterprise/cambio-pronto.png', title: 'Câmbio Pronto' }} />

            <Slide
              content={{ image: '/enterprise/cambio-futuro.png', title: 'Hedge e Câmbio Futuro' }}
            />

            <Slide content={{ image: '/enterprise/ace.png', title: 'ACE' }} />

            <Slide content={{ image: '/enterprise/acc.png', title: 'ACC' }} />

            <Slide content={{ image: '/enterprise/finimp.png', title: 'FINIMP' }} />
          </Slider>
        </div>
      </FirstSection>
      <Bar />
      <SecondSection>
        <Image src="/enterprise/Mockup celular.png" alt="FINIMP" width="361px" height="707px" />
        <div className="main">
          <div className="item">
            <div className="arrow-right">Modalidades</div>
          </div>
          <div className="item">
            <div className="arrow-right">Requisitos</div>
          </div>
          <div className="item">
            <div className="arrow-right">Prazos</div>
          </div>
          <div className="item">
            <div className="arrow-right">Tributação</div>
          </div>
          <div className="item">
            <div className="arrow-right">Vantagens</div>
          </div>
        </div>
        <div className="action">
          <p>Consulte agora um dos nossos especialistas. Vamos esclarecer todas as suas dúvidas.</p>
          <button type="button" className="primary-button">
            consultar especialista
          </button>
        </div>
      </SecondSection>
      <ThirdSection>
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

            <button type="button">consultar especialista</button>
          </div>
        </div>
      </FourthSection>
      <Footer />
    </div>
  )
}

export default enterprise
