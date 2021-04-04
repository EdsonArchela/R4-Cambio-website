import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const CardCSS = styled.div`
  border-radius: 10px;
  width: 335px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: auto;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  }
  #card-image {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: ${({ theme }) => theme.colors.txtPrimary};
    h2 {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`
const Slide = ({ content }: { content: { image: string; title: string } }): JSX.Element => (
  <CardCSS>
    <Image id="card-image" src={content.image} alt={content.title} width="335px" height="360px" />
    <div className="description">
      <h2>{content.title}</h2>
      <p>saiba mais</p>
    </div>
  </CardCSS>
)
export default Slide
