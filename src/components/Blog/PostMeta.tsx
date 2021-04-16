import React from 'react'
import { PostData } from '../../utils/loader'
import Meta from './Meta'

const PostMeta: React.FC<{ post: PostData }> = ({ post }) => {
  return (
    <Meta
      meta={{
        title: post.title,
        desc: post.description,
        link: post.canonicalUrl,
        image: post.bannerPhoto,
      }}
    />
  )
}
export default PostMeta
