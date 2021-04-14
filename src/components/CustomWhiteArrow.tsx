/* eslint-disable react/require-default-props */
import React from 'react'

const CustomWhiteArrow = (props: {
  className?: string
  style?: Record<string, unknown>
  onClick?: () => void
  direction: 'prev' | 'next'
}): JSX.Element => {
  const { className, style, onClick, direction } = props
  return (
    <button
      type="button"
      className={className}
      style={{ ...style, display: 'block', height: '68px' }}
      onClick={onClick}
    >
      {direction === 'next' ? (
        <img src="/assets/carousel/whiteRightArrow.svg" alt="next" />
      ) : (
        <img src="/assets/carousel/whiteLeftArrow.svg" alt="previous" />
      )}
    </button>
  )
}
export default CustomWhiteArrow
