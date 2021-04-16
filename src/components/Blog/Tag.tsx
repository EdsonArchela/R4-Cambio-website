import React from 'react'

const Tag: React.FC<{ tag: string }> = (props) => {
  const { tag } = props
  return (
    <div
      style={{
        display: 'inline-block',
        padding: '3px 12px',
        borderRadius: '20px',
        backgroundColor: '#dddddd',
        color: '#333333',
        marginRight: '7px',
        boxShadow: '0px 1px 1px #00000030',
      }}
    >
      {tag}
    </div>
  )
}
export default Tag
