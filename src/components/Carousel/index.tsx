/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled from 'styled-components'
import useCarousel from '../../hook/useCarousel'

const Container = styled.div`
  .carousel-content {
    max-width: 1024px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    .carousel-item {
      margin: 1rem 2rem;
    }
  }
`

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Carousel = ({
  slides,
  interval = 5000,
}: {
  slides: JSX.Element[]
  interval: number
}): JSX.Element => {
  const { length } = slides
  const [active, setActive, handlers, style] = useCarousel(length, interval)

  return (
    <Container>
      {length > 0 && (
        <div className="carousel">
          <ol className="carousel-indicators">
            {slides.map((_: unknown, index: number) => (
              <li
                onClick={() => setActive(index)}
                key={index}
                className={`${active === index ? 'active' : ''}`}
              />
            ))}
          </ol>
          <div className="carousel-content" {...handlers} style={style}>
            <div className="carousel-item">{slides[slides.length - 1]}</div>
            {slides.map((slide, index) => (
              <div className="carousel-item" key={index}>
                {slide}
              </div>
            ))}
            <div className="carousel-item">{slides[0]}</div>
          </div>
        </div>
      )}
    </Container>
  )
}
export default Carousel
