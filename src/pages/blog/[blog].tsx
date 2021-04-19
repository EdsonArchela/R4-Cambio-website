import glob from 'glob'
import React from 'react'

import BlogPost from '../../components/Blog/BlogPost'
import { loadBlogPosts, loadPost, PostData } from '../../utils/loader'

function Post(props: { post: PostData; posts: PostData[] }): JSX.Element {
  const { post, posts } = props
  return <BlogPost post={post} otherPosts={posts} />
}

export const getStaticPaths = () => {
  const blogs = glob.sync('./src/md/*.md')
  const slugs = blogs.map((file: string) => {
    const popped = file.split('/').pop()
    if (!popped) throw new Error(`Invalid blog path: ${file}`)
    return popped.slice(0, -3).trim()
  })
  const paths = slugs.map((slug) => `/blog/${slug}`)
  return { paths, fallback: false }
}

export const getStaticProps = async ({
  params,
}: {
  params: { blog: string }
}): Promise<{ props: { post: PostData; posts: PostData[] } }> => {
  const post = await loadPost(`${params.blog}.md`)
  const posts = await loadBlogPosts()
  const filteredposts = posts.filter((p) => p.title !== post.title)
  return { props: { post, posts: filteredposts.slice(0, 4) } }
}

export default Post
