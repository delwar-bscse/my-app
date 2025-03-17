import React from 'react'

export default async function AboutBlog({params}) {
  const {blog} = await params;
  return (
    <div>About - <span className='capitalize'>{blog}</span> Blog</div>
  )
}
