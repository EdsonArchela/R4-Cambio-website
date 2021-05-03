/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRouter } from 'next/dist/client/router'
import {
  FirstSection,
  Bar,
  SecondSection,
  FourthSection,
  GreenCard,
  PickCard,
  ThirdSection,
  Coin,
} from '../styles/index'
import { loadBlogPosts, PostData } from '../utils/loader'

const Index = ({ posts }: { posts: PostData[] }): JSX.Element => {
  const route = useRouter()

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  }

  return (
    <>
      <FirstSection>
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Coin src="/home/MOEDAS.png" alt="" className="coins" isVisible={isVisible} />
          )}
        </VisibilitySensor>

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
              route.push('/contact')
            }}
          >
            Eu quero
          </button>
        </div>
      </FirstSection>
      <Bar />
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <>
            <SecondSection isVisible={isVisible}>
              <div className="firstBlock left">
                <h2>As melhores oportunidades de câmbio em um só lugar!</h2>
                <img src="/home/main.png" alt="top of the world" id="topOfWorldImg" />
              </div>
              <div className="firstBlock right">
                <GreenCard
                  onClick={() => {
                    route.push('/enterprise')
                  }}
                >
                  <div className="title">
                    <img src="/home/empresa.svg" alt="Empresa" />
                    <h2>PARA SUA EMPRESA</h2>
                  </div>
                  <p>
                    Câmbio pronto, hedge e câmbio futuro, ACC, ACE, FINIMP, recebimento de
                    exportações, trade finance e pagamentos.
                  </p>
                </GreenCard>
                <GreenCard
                  onClick={() => {
                    route.push('/para-voce')
                  }}
                >
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
          </>
        )}
      </VisibilitySensor>
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
            <PickCard img={posts[0].thumbnailPhoto || '/home/building.png'}>
              <h2>{posts[0].title}</h2>
            </PickCard>
            <PickCard img={posts[1].thumbnailPhoto || '/home/coffee.png'}>
              <h2>{posts[1].title}</h2>
            </PickCard>
          </div>
          <div className="firstBlock mobile">
            <Slider {...sliderSettings}>
              <PickCard img={posts[0].thumbnailPhoto || '/home/building.png'}>
                <h2>{posts[0].title}</h2>
              </PickCard>
              <PickCard img={posts[1].thumbnailPhoto || '/home/coffee.png'}>
                <h2>{posts[1].title}</h2>
              </PickCard>
            </Slider>
          </div>
        </div>
      </ThirdSection>{' '}
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <>
            <FourthSection isVisible={isVisible}>
              <div className="firstBlock left">
                <h2>Seja bem vindo ao nosso escritório, entre para conhecer a R4 Câmbio.</h2>
                <img src="/home/come.png" alt="top of the world" />
                <h2>
                  Preparamos um material especial para você entender o que nos faz diferente e
                  porque você pode confiar em nós.
                </h2>
              </div>
              <div className="firstBlock right">
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
                <button
                  type="button"
                  onClick={() => {
                    route.push('/contact')
                  }}
                >
                  Quero Conhecer
                </button>
              </div>
            </FourthSection>
          </>
        )}
      </VisibilitySensor>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const posts = await loadBlogPosts()
  const props = { posts: posts.slice(0, 2) }
  return { props }
}
