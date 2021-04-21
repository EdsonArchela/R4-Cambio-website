/* eslint-disable react/require-default-props */
import React from 'react'
import { consts } from 'react-elastic-carousel'
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border: none;
`

const ElasticArrow = ({
  type,
  onClick,
  isEdge,
}: {
  type: string
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  isEdge: boolean
}): JSX.Element => {
  const pointer =
    type === consts.PREV ? (
      <img src="/assets/carousel/leftarrow.svg" alt="previous" />
    ) : (
      <img src="/assets/carousel/rightarrow.svg" alt="next" />
    )
  return (
    <Button onClick={onClick} disabled={isEdge}>
      {pointer}
    </Button>
  )
}
export default ElasticArrow
