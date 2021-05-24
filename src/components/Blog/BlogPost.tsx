import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Markdown from './Markdown'
import { PostData } from '../../utils/loader'
import PostMeta from './PostMeta'
import { Author } from './Author'
import SocialShare from './SocialShare'
import PostCard from './PostCard'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 450px;
  width: 100%;
  margin: 0 5rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 350px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 0px;
  }
`

const BlogPost: React.FunctionComponent<{ post: PostData; otherPosts: PostData[] }> = ({
  post,
  otherPosts,
}) => {
  const { title, subtitle } = post
  return (
    <>
      <Head>
        <meta name="og:title" content={title} />
        <meta name="og:type" content="article" />
        <meta name="og:url" content={`https://r4-cambio-website.vercel.app/${post.path}`} />
        <meta
          name="og:image"
          content={`https://r4-cambio-website.vercel.app/${post.thumbnailPhoto}`}
        />
        <meta name="og:site_name" content="R4 Câmbio" />
        <meta name="og:description" content={post.description} />
      </Head>
      <Container>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <PostMeta post={post} />
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <div style={{ padding: '50px 3vw 50px 3vw' }}>
              {title && (
                <h1
                  style={{
                    margin: '10px 0px 10px 0px',
                    padding: 0,
                    border: 'none',
                  }}
                >
                  {title}
                </h1>
              )}
              {subtitle && (
                <h2
                  style={{
                    margin: '10px 0px',
                    padding: 0,
                    border: 'none',
                    fontWeight: 400,
                    opacity: '0.6',
                  }}
                >
                  {subtitle}
                </h2>
              )}
              <hr
                style={{
                  height: '1px',
                  color: '#eee',
                  opacity: 0.2,
                  margin: '10px 0px',
                }}
              />
              <SocialShare post={post} style={{ marginBottom: '1rem', textAlign: 'right' }} />
              <Author post={post} />
            </div>
            <div
              style={{
                margin: 'auto',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {post.bannerPhoto && (
                <img src={post.bannerPhoto} alt="" style={{ margin: 'auto', maxWidth: '400px' }} />
              )}
            </div>
            <div style={{ width: '100%', padding: '0px 3vw' }}>
              <Markdown source={post.content} />
            </div>
          </div>
        </div>
        <div>
          <h1>Leia Também:</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            {otherPosts.map((p) => {
              return <PostCard post={p} key={p.datePublished} />
            })}
          </div>
        </div>
      </Container>
    </>
  )
}

export default BlogPost
