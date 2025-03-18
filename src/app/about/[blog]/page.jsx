import Image from 'next/image';
import React from 'react'

export default async function AboutBlog({params}) {
  const {blog} = await params;
  return (
    <div>
      <div>About - <span className='capitalize'>{blog}</span> Blog</div>
      <Image src="https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062920.jpg?ga=GA1.1.416940905.1734115860&semt=ais_hybrid" alt="Laptop" width={200} height={200}/>
    </div>
  )
}
