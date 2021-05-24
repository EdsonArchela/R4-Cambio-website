/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import { useRouter } from 'next/dist/client/router'
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
} from '../styles/para-voce'
import ElasticWhiteArrow from '../components/ElasticWhiteArrow'
import ElasticArrow from '../components/ElasticArrow'
import { loadBlogPosts, PostData } from '../utils/loader'
import FrenteSimul from '../components/FrenteSimul/FrenteSimul'

const ParaVoce = ({ posts }: { posts: PostData[] }): JSX.Element => {
  const [width, setWidth] = React.useState(0)
  const [mobile, setMobile] = React.useState(false)
  const router = useRouter()

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('resize', () => setWidth(window.innerWidth))
      if (window.innerWidth <= 768) {
        setMobile(true)
      }
    }
  }, [width])
  const breakPoints = [
    { width: 1, itemsToShow: 1, showArrows: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1025, itemsToShow: 3 },
    { width: 1436, itemsToShow: 4, pagination: false, showArrows: false },
  ]
  return (
    <>
      <Main>
        <div className="background">
          <div className="action">
            <div className="textBlock">
              <h2>L-I-B-E-R-D-A-D-E</h2>
              {!mobile && (
                <p>
                  O comportamento correto na hora de <b>investir</b> é a <b>chave</b> para operações
                  de <b>sucesso</b>!
                </p>
              )}
            </div>
          </div>
          {mobile && (
            <p>
              O comportamento correto na hora de <b>investir</b> é a <b>chave</b> para operações de
              <b> sucesso</b>!
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
      <FirstSection>
        <div className="background">
          <div className="action">
            <div className="block">
              <div className="textBlock">
                <h2>Nunca foi tão fácil fazer uma transferência internacional com segurança!</h2>
                <img src="/paravoce/TI2 1.png" alt="TI2" />
              </div>
              <div className="transferBox">
                <FrenteSimul />
              </div>
            </div>
          </div>
        </div>
      </FirstSection>
      <SecondSection>
        <div className="gradient">
          <div className="block">
            <h2>As melhores opções em um só lugar!</h2>
            <p>As melhores soluçãos para você, com segurança, simplicidade e agilidade!</p>
            <div className="carousel">
              <Carousel
                breakPoints={breakPoints}
                isRTL={false}
                disableArrowsOnEnd
                enableMouseSwipe
                enableSwipe
                renderArrow={ElasticWhiteArrow}
              >
                <WhiteSlide>
                  <img src="/paravoce/Ícone transfer.png" alt="transfer" />
                  <h3>
                    Transferências <br /> internacionais
                  </h3>
                  <ul>
                    <li>Envio de recursos para sua conta no exterior</li>
                    <li>Envio de recursos aos familiares que estão no exterior</li>
                    <li>Envio de recursos para investir no exterior</li>
                    <li>Pagamento de cursos e conferências internacionais</li>
                    <li>Pagamentos de processos de cidadania</li>
                    <li>Compra de imóveis recebimento de aluguéis no exterior</li>
                  </ul>
                </WhiteSlide>
                <WhiteSlide>
                  <img src="/paravoce/Ícone google.png" alt="google" />
                  <h3>
                    Google <br /> adsense
                  </h3>
                  <h4>
                    Você tem um canal no YouTube? Ou é um influenciador digital? Chegou a hora de
                    ganhar dinheiro com o seu canal com Google AdSense! A R4 Câmbio ainda lhe
                    auxilia a economizar na hora do câmbio.
                  </h4>
                </WhiteSlide>
                <WhiteSlide>
                  <img src="/paravoce/Ícone seguro.png" alt="seguro" />
                  <h3>
                    Seguro <br /> viagem
                  </h3>
                  <h4>
                    Com o seguro viagem internacional você conta com assistência 24 horas no caso de
                    algum imprevisto no exterior. Garantia de qualidade Allianz, líder mundial em
                    seguro viagem.
                  </h4>
                </WhiteSlide>
                <WhiteSlide>
                  <img src="/paravoce/Ícone Cartão Pré-pago.png" alt="Cartão Pré-pago" />
                  <h3>
                    Cartão <br /> Pré-pago
                  </h3>
                  <h4>
                    Com o Cash Passport Mastercard Platinum, o cartão pré-pago da Confidence Câmbio,
                    você tem muito mais segurança para viajar para o exterior. Carregue em até seis
                    moedas estrangeiras, livre de anuidade. Faça recargas de fora do Brasil
                    utilizando nossos serviços de assessoria.
                  </h4>
                </WhiteSlide>
                <WhiteSlide>
                  <img src="/paravoce/Ícone moneygram.png" alt="moneygram" />
                  <h3>
                    Money <br /> Gram
                  </h3>
                  <h4>
                    Com a MoneyGram, você envia e recebe dinheiro do exterior em poucos minutos,
                    após confirmação do pagamento, para mais de 190 países e na comodidade da sua
                    casa!
                  </h4>
                </WhiteSlide>
                <WhiteSlide>
                  <img src="/paravoce/Ícone money.png" alt="money" />
                  <h3>
                    Moeda em <br /> espécie
                  </h3>
                  <h4>
                    Se você vai viajar para o exterior, é muito importante ter um planejamento bem
                    detalhado para curtir a experiência ao máximo. Fale com um assessor e conheça
                    maneiras de como comprar sua Moeda em Espécie de forma rápida e segura!
                  </h4>
                </WhiteSlide>
                <WhiteSlide>
                  <img src="/paravoce/Ícone chip.png" alt="chip" />
                  <h3>
                    Chip <br /> internacional
                  </h3>
                  <h4>
                    Com o chip internacional de celular você já sai do Brasil conectado com chamadas
                    de voz e pacote de dados de internet, sem limite de franquia diária! Coberturas
                    em mais de 20 países. Chip internacional do tipo Triple Simcard, ou seja,
                    atendem celulares com chips de tamanho padrão, micro ou nano
                  </h4>
                </WhiteSlide>
              </Carousel>
            </div>
          </div>
        </div>
      </SecondSection>
      <FirstFloating>
        <button
          type="button"
          onClick={() => {
            router.push('/blog/limites-cambio-pf')
          }}
          className="box"
        >
          <h2>
            VOCÊ SABE QUAL O LIMITE DE COMPRA DE MOEDA ESTRANGEIRA QUE <br /> UMA PESSOA FÍSICA PODE
            FAZER?
          </h2>
          <img src="/paravoce/Line 6.svg" alt="line" />
          <p>
            O número de investidores brasileiros aumentou drásticamente nos útimos anos,
            principalmente em virtude da queda da taxa de juros que há muito não estivera tão baixa
            como nos níveis atuais. O número de investidores aumentou mais nos últimos 2 anos que
            nos 10 anos anteriors.
          </p>

          <p>
            Buscando diversificar seus patrimônios muitos brasileiros têm buscado alternativas de
            investimentos em outros países, na maioria nos EUA. É possível hoje abrir uma conta em
            uma corretora no exterior e operar, mesmo morando no Brasil.
          </p>
        </button>
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
            <Carousel
              breakPoints={breakPoints}
              isRTL={false}
              disableArrowsOnEnd
              enableMouseSwipe
              enableSwipe
              renderArrow={ElasticArrow}
            >
              <div className="item">
                <h3>NOTÍCIAS</h3>
              </div>
              <div className="item">
                <h3>PRODUTOS</h3>
              </div>
              <div className="item">
                <h3>ARTIGOS</h3>
              </div>
              <div className="item">
                <h3>TENDÊNCIAS</h3>
              </div>
            </Carousel>
          </div>
        </div>
      </ForthSection>
      <SecondFloating>
        <Carousel
          breakPoints={breakPoints}
          isRTL={false}
          disableArrowsOnEnd
          enableMouseSwipe
          enableSwipe
          renderArrow={ElasticArrow}
        >
          {posts.map((post) => (
            <div className="test" key={post.title}>
              <div className="box">
                <div className="rect">
                  <img src={post.thumbnailPhoto} alt="" />
                </div>
                <h2>{post.title}</h2>
                <p>{post.subtitle}</p>
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => {
                    router.push(post.path)
                  }}
                >
                  conferir a matéria
                </button>
              </div>
            </div>
          ))}
          {/* <div className="test">
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
          </div> */}
        </Carousel>
      </SecondFloating>
      <Bar />
    </>
  )
}

export default ParaVoce

export const getStaticProps = async () => {
  const posts = await loadBlogPosts()
  const props = { posts: posts.slice(0, 5) }
  return { props }
}
