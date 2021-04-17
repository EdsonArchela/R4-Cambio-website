/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
  const [width, setWidth] = React.useState(0)
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
      if (window.innerWidth > 1024) setSliderSettings((prev) => ({ ...prev, slidesToShow: 3 }))

      if (window.innerWidth <= 1024) setSliderSettings((prev) => ({ ...prev, slidesToShow: 2 }))
      if (window.innerWidth <= 768)
        setSliderSettings((prev) => ({ ...prev, slidesToShow: 1, arrows: false, autoplay: true }))
    }
  }, [width])

  return (
    <>
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

            <button type="button">consultar especialista</button>
          </div>
        </div>
      </FourthSection>
    </>
  )
}

export default Enterprise
