import React from 'react'
// import { gwen } from 'gwen';
import { format } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'

import styled from 'styled-components'
import { PostData } from '../../utils/loader'
import { config } from '../../utils/globals'

const Fale = styled.a`
  background-color: #055556;
  border-radius: 8px;
  padding: 0.25rem;
  margin-top: 0.5rem !important;
  color: white;
`

export const FollowButton = (): JSX.Element => {
  return (
    <a href="/newsletter">
      <div
        style={{
          display: 'inline-block',
          border: `1px solid ${config.accentColor}`,
          borderRadius: '4px',
          padding: '2px 10px',
          color: config.accentColor,
          fontSize: '10pt',
          marginBottom: '2px',
          marginLeft: '4px',
        }}
      >
        Follow
      </div>
    </a>
  )
}

export const AuthorLines: React.FC<{ post: PostData }> = (props) => {
  const lineStyle = {
    margin: '2px',
    padding: 0,
    lineHeight: 1.2,
    fontSize: '11pt',
  }

  const { post } = props
  return (
    <div>
      <p style={{ ...lineStyle }}>{post.author ? post.author : ''}</p>

      <p style={{ opacity: 0.6, ...lineStyle }}>
        {post.datePublished
          ? format(new Date(post.datePublished), "dd 'de' MMMM, yyyy", { locale: pt })
          : ''}
      </p>

      <p style={{ ...lineStyle, marginTop: '0.5rem' }}>
        {post.authorWhats && (
          <Fale
            style={{
              textDecoration: 'none',
            }}
            href={`https://api.whatsapp.com/send?phone=${post.authorWhats}&text=Ol%C3%A1%2C+preciso+de+atendimento+para+uma+opera%C3%A7%C3%A3o+de+c%C3%A2mbio.`}
            target="_blank"
            rel="noreferrer"
          >
            Fale comigo
          </Fale>
        )}
      </p>
    </div>
  )
}

export const Author: React.FC<{ post: PostData }> = (props) => {
  const { post } = props
  return (
    <div
      style={{
        margin: '0px',
        padding: '0px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        {post.authorPhoto && (
          <img
            src={post.authorPhoto}
            alt={post.author}
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '70px',
              margin: '0 1rem 0 0',
            }}
          />
        )}
        <AuthorLines post={post} />
      </div>
    </div>
  )
}
