import React from 'react'
import styled from 'styled-components'

const ContentCSS = styled.div<{ myTranslate: number; transition: number; width: number }>`
  transform: translateX(${(props) => -props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  width: ${(props) => props.width}px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

const SliderContent = ({
  translate,
  transition,
  width,
  children,
}: {
  translate: number
  transition: number
  width: number
  children: any
}): JSX.Element => (
  <ContentCSS myTranslate={translate} transition={transition} width={width}>
    {children}
  </ContentCSS>
)

export default SliderContent
