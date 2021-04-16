/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Header from '../../components/pattern/Header'
import Footer from '../../components/pattern/Footer'
import {
  Main,
  Bar,
  FirstSection,
  SecondSection,
  WhiteSlide,
  ThirdSection,
  FirstFloating,
  ForthSection,
  SecondFloating,
} from './style'
import CustomWhiteArrow from '../../components/CustomWhiteArrow'

const ParaVoce: React.FC = () => {
  const [width, setWidth] = React.useState(0)
  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomWhiteArrow direction="next" />,
    prevArrow: <CustomWhiteArrow direction="prev" />,
  })
  const [arrowSliderSettings, setArrowSliderSettings] = useState({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  })

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('resize', () => setWidth(window.innerWidth))
      if (window.innerWidth > 1024) {
        setSliderSettings((prev) => ({ ...prev, slidesToShow: 3 }))
        setArrowSliderSettings((prev) => ({ ...prev, slidesToShow: 4 }))
      }

      if (window.innerWidth <= 1024) {
        setSliderSettings((prev) => ({ ...prev, slidesToShow: 2 }))
        setArrowSliderSettings((prev) => ({ ...prev, slidesToShow: 2 }))
      }
      if (window.innerWidth <= 768) {
        setSliderSettings((prev) => ({ ...prev, slidesToShow: 1, arrows: false, autoplay: true }))
        setArrowSliderSettings((prev) => ({
          ...prev,
          dots: true,
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
        }))
      }
    }
  }, [width])

  return (
    <div style={{ overflow: 'hidden' }}>
      <Header />
      <Main>
        <div className="background">
          <div className="action">
            <div className="textBlock">
              <h2>L-I-B-E-R-D-A-D-E</h2>
              <p>
                O comportamento correto na hora de <b>investir</b> é a <b>chave</b> para operações
                de <b>sucesso</b>!
              </p>
            </div>
          </div>
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
      <FirstSection>
        <div className="background">
          <div className="action">
            <div className="block">
              <div className="textBlock">
                <h2>
                  Nunca foi tão fácil fazer uma <br />
                  transferência internacional <br />
                  com segurança!
                </h2>
                <img src="/paravoce/TI2 1.png" alt="TI2" />
              </div>
              <div className="transferBox">
                <div className="transferBoxText">
                  <h2>Título</h2>
                  <div className="item">
                    <img src="/paravoce/CHECKLIST 1.png" alt="" />
                    <p>Menos burocracia para você </p>
                  </div>
                  <div className="item">
                    <img src="/paravoce/CHECKLIST 1.png" alt="" />
                    <p>Transferência em até 24 horas</p>
                  </div>
                  <div className="item">
                    <img src="/paravoce/CHECKLIST 1.png" alt="" />
                    <p>Envie para qualquer país </p>
                  </div>
                  <div className="item">
                    <img src="/paravoce/CHECKLIST 1.png" alt="" />
                    <p>Tarifa fixa por operação </p>
                  </div>
                  <div className="item">
                    <img src="/paravoce/CHECKLIST 1.png" alt="" />
                    <p>Segurança nas operações </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => {
                    console.log('Gostaria de fazer uma transferência')
                  }}
                >
                  quero fazer uma tranferência
                </button>
              </div>
            </div>
          </div>
        </div>
      </FirstSection>
      <SecondSection>
        <div className="gradient">
          <div className="block">
            <h2>As melhores opções em um só lugar!</h2>
            <p>
              As melhores soluções em câmbio para o agronegócio.
              <br />
              Segurança nas operações e lucro recorrente para sua empresa.
            </p>
            <div className="carousel">
              <Slider {...sliderSettings}>
                <WhiteSlide>
                  <img src="/paravoce/Ícone transfer.png" alt="transfer" />
                  <h3>
                    Transferências <br /> internacionais
                  </h3>
                  <h4>
                    As melhores soluções em câmbio para o agronegócio.
                    <br />
                    Segurança nas operações e lucro recorrente para sua empresa.
                  </h4>
                </WhiteSlide>
                <WhiteSlide>
                  <img src="/paravoce/Ícone google.png" alt="google" />
                  <h3>
                    Google <br /> adsense
                  </h3>
                  <h4>
                    As melhores soluções em câmbio para o agronegócio.
                    <br />
                    Segurança nas operações e lucro recorrente para sua empresa.
                  </h4>
                </WhiteSlide>
                <WhiteSlide>
                  <img src="/paravoce/Ícone seguro.png" alt="seguro" />
                  <h3>
                    Seguro <br /> viagem
                  </h3>
                  <h4>
                    As melhores soluções em câmbio para o agronegócio.
                    <br />
                    Segurança nas operações e lucro recorrente para sua empresa.
                  </h4>
                </WhiteSlide>
                <WhiteSlide>
                  <img src="/paravoce/Ícone Cartão Pré-pago.png" alt="Cartão Pré-pago" />
                  <h3>
                    Cartão <br /> Pré-pago
                  </h3>
                  <h4>
                    As melhores soluções em câmbio para o agronegócio.
                    <br />
                    Segurança nas operações e lucro recorrente para sua empresa.
                  </h4>
                </WhiteSlide>
                <WhiteSlide>
                  <img src="/paravoce/Ícone moneygram.png" alt="moneygram" />
                  <h3>
                    Money <br /> Gram
                  </h3>
                  <h4>
                    As melhores soluções em câmbio para o agronegócio.
                    <br />
                    Segurança nas operações e lucro recorrente para sua empresa.
                  </h4>
                </WhiteSlide>
                <WhiteSlide>
                  <img src="/paravoce/Ícone money.png" alt="money" />
                  <h3>
                    Moeda em <br /> espécie
                  </h3>
                </WhiteSlide>
                <WhiteSlide>
                  <img src="/paravoce/Ícone chip.png" alt="chip" />
                  <h3>
                    Chip <br /> internacional
                  </h3>
                </WhiteSlide>
              </Slider>
            </div>
          </div>
        </div>
      </SecondSection>
      <FirstFloating>
        <div className="box">
          <h2>
            VOCÊ SABE QUAL O LIMITE DE COMPRA DE MOEDA ESTRANGEIRA QUE <br /> UMA PESSOA FÍSICA PODE
            FAZER?
          </h2>
          <img src="/paravoce/Line 6.svg" alt="line" />
          <p>Texto explicativo</p>
        </div>
      </FirstFloating>
      <ThirdSection>
        <div className="imgBox">
          <div className="fade">
            <text>
              SEGURO VIAGEM! <br /> Uma expressão de amor <br /> e cuidado com a sua família!
            </text>
          </div>
        </div>
        <div className="itemBox">
          <div className="item">
            <img src="/paravoce/Seta pequena.png" alt="Seta" />
            <h3>Modalidades</h3>
          </div>
          <div className="item">
            <img src="/paravoce/Seta pequena.png" alt="Seta" />
            <h3>Requisitos</h3>
          </div>
          <div className="item">
            <img src="/paravoce/Seta pequena.png" alt="Seta" />
            <h3>Prazos</h3>
          </div>
          <div className="item">
            <img src="/paravoce/Seta pequena.png" alt="Seta" />
            <h3>Tributação</h3>
          </div>
          <div className="item">
            <img src="/paravoce/Seta pequena.png" alt="Seta" />
            <h3>Vantagens</h3>
          </div>
        </div>
        <div className="textBox">
          <h2>
            Consulte agora um dos nossos especialistas. <br />
            Vamos esclarecer todas as suas dúvidas.
          </h2>
          <button
            type="button"
            className="primary-button"
            onClick={() => {
              console.log('Gostaria de consultar um especialista')
            }}
          >
            consultar especialista
          </button>
        </div>
      </ThirdSection>
      <ForthSection>
        <div className="block">
          <p>CONTEÚDOS EXCLUSIVOS</p>
          <h2>NEWS R4</h2>
          <div className="itemBox">
            <Slider {...arrowSliderSettings}>
              <div className="item">
                <h3>NOTÍCIAS</h3>
              </div>
              <div className="item">
                <h3>OPINIÕES</h3>
              </div>
              <div className="item">
                <h3>ARTIGOS</h3>
              </div>
              <div className="item">
                <h3>TENDÊNCIAS</h3>
              </div>
            </Slider>
          </div>
        </div>
      </ForthSection>
      <SecondFloating>
        <Slider {...sliderSettings}>
          <div className="test">
            <div className="box">
              <div className="rect">
                <img src="/paravoce/market 1.png" alt="Market" />
              </div>
              <h2>
                A influência da pandemia <br /> no câmbio em 2021
              </h2>
              <p>
                texto de chamada para o <br /> blog
              </p>
              <button
                type="button"
                className="primary-button"
                onClick={() => {
                  console.log('Gostaria de conferir a matéria')
                }}
              >
                conferir a matéria
              </button>
            </div>
          </div>
          <div className="test">
            <div className="box">
              <div className="rect">
                <img src="/paravoce/checklist 2 1.png" alt="Checklist" />
              </div>
              <h2>
                Um checklist completo <br /> para seus primeiros passos <br /> no mercado de câmbio
              </h2>
              <p>
                texto de chamada para o <br /> blog
              </p>
              <button
                type="button"
                className="primary-button"
                onClick={() => {
                  console.log('Gostaria de acessar agora')
                }}
              >
                acessar agora
              </button>
            </div>
          </div>
          <div className="test">
            <div className="box">
              <div className="rect">
                <img src="/paravoce/analise 1.png" alt="Analise" />
              </div>
              <h2>
                Análise tributária sobre <br /> exportação
              </h2>
              <p>
                texto de chamada para o <br /> blog
              </p>
              <button
                type="button"
                className="primary-button"
                onClick={() => {
                  console.log('Gostaria de acessar')
                }}
              >
                quero acessar
              </button>
            </div>
          </div>
        </Slider>
      </SecondFloating>
      <Bar />
      <Footer />
    </div>
  )
}

export default ParaVoce
