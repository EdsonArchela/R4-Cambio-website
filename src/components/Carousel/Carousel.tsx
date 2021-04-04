import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Arrow from './Arrow'
import Slide from './Slide'
import SliderContent from './SliderContent'

const Slider = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
`
const getWidth = () => window.innerWidth

const Carousel = ({ slides }: { slides: { image: string; title: string }[] }): JSX.Element => {
  const firstSlide = slides[0]
  const secondSlide = slides[1]
  const lastSlide = slides[slides.length - 1]

  const sliderRef = useRef()
  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide],
  })

  const { activeSlide, translate, _slides, transition } = state

  const nextSlide = () =>
    setState({
      ...state,
      translate: translate + getWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    })

  const prevSlide = () =>
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    })

  return (
    <Slider ref={sliderRef}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
        {_slides.map((_slide) => (
          <Slide key={_slide.title} content={_slide} />
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </Slider>
  )
}
export default Carousel
