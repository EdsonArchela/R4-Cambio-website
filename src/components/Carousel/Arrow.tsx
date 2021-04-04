import React, { memo } from 'react'
import styled from 'styled-components'

const ArrowCss = styled.div<{ direction: string }>`
  display: flex;
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === 'right' ? `right: 25px` : `left: 25px`)};
  height: 50px;
  width: 50px;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    transform: translateX(${(props) => (props.direction === 'left' ? '-2' : '2')}px);

    &:focus {
      outline: 0;
    }
  }
`

const Arrow = ({ direction, handleClick }) => {
  return (
    <ArrowCss direction={direction} onClick={handleClick}>
      {direction === 'right' ? (
        <img src="/assets/carousel/rightarrow.svg" alt="right" />
      ) : (
        <img src="/assets/carousel/leftarrow.svg" alt="left" />
      )}
    </ArrowCss>
  )
}

export default memo(Arrow)
