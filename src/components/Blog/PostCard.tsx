import React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import pt from 'date-fns/locale/pt-BR'
import { PostData } from '../../utils/loader'
import Tag from './Tag'

const PostCard: React.FC<{ post: PostData }> = (props) => {
  const { post } = props
  return (
    <a
      href={`/${post.path}`}
      style={{
        textDecoration: 'inherit',
        color: 'inherit',
        margin: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '400px',
        width: '300px',
      }}
    >
      <div
        style={{
          // flexBasis: '300px',
          // flex: 1,
          // minWidth: '200px',
          // maxWidth: '450px',
          opacity: 0.92,
          boxShadow: '0px 2px 10px #00000040',
          width: '100%',
          maxWidth: '500px',
          overflow: 'hidden',
          borderRadius: '8px',
          // boxShadow: '0px 2px 10px #00000020',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          // margin: '10px 0px',
        }}
      >
        {post.thumbnailPhoto && (
          <Image src={post.thumbnailPhoto} layout="responsive" width="500" height="400" />
          // <div
          //   style={{
          //     background: `url(${post.thumbnailPhoto}) no-repeat center center`,
          //     backgroundSize: 'cover',
          //     width: '100%',
          //     flex: 1,
          //   }}
          // />
        )}
        <div
          style={{
            padding: '15px 10px',
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid #00000020',
          }}
        >
          {post.title && (
            <h2
              style={{
                margin: '0px 0px 7px 0px',
                // padding: '2px 0px 2px 0px',
                fontSize: '14pt',
                fontWeight: 600,
                padding: '2px 10%',
                textAlign: 'center',
              }}
            >
              {post.title}
            </h2>
          )}
          {post.subtitle && post.subtitle && (
            <p
              style={{
                maxLines: 6,
                margin: '0px',
                padding: '0px',
                fontSize: '12pt',
                color: '#333333',
                maxHeight: 75,
                overflow: 'hidden',
              }}
            >
              {post.subtitle}
            </p>
          )}
          <p style={{ opacity: 0.6, textAlign: 'center', margin: '1rem 0px 0 0' }}>
            {post.datePublished
              ? format(new Date(post.datePublished), "dd 'de' MMMM, yyyy", { locale: pt })
              : ''}
          </p>
          <div style={{ flex: 1 }}> </div>
          {false && (
            <div style={{ marginTop: '7px' }}>
              {post.tags && (post.tags || []).map((tag) => <Tag tag={tag} />)}
            </div>
          )}
        </div>
      </div>
    </a>
  )
}

export default PostCard
