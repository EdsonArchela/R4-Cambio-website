import React from 'react'

import BlogPost from '../../components/Blog/BlogPost'
import { loadPost, PostData } from '../../utils/loader'

function Post(props: { post: PostData }): JSX.Element {
  const { post } = props
  return <BlogPost post={post} />
}

export const getStaticProps = async ({
  params,
}: {
  params: { blog: string }
}): Promise<{ props: { post: PostData } }> => {
  const post = await loadPost(`blog/${params.blog}.md`)
  return { props: { post } }
}

export default Post
