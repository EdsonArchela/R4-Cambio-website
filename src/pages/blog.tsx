import React from 'react'
import Head from 'next/head'
import { loadBlogPosts, PostData } from '../utils/loader'
import PostCard from '../components/Blog/PostCard'

const sectionStyle = {
  width: '100%',
  padding: '100px 3vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
} as const

const Blog = ({ posts }: { posts: PostData[] }) => (
  <div style={{ width: '100%', maxWidth: 1200 }}>
    <Head>
      <title>R4 Câmbio - Artigos</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div style={sectionStyle}>
      <h1>HELLO WORD</h1>
      <h2>{posts.length}</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(300px,1fr))`,
          gridRowGap: '8px',
          gridColumnGap: '8px',
          width: '100%',
          padding: '0px 7vw',
        }}
      >
        {posts.map((post) => {
          return <PostCard post={post} key={post.datePublished} />
        })}
      </div>
    </div>
  </div>
)

export default Blog

export const getStaticProps = async () => {
  const posts = await loadBlogPosts()
  const props = { posts }
  return { props }
}
