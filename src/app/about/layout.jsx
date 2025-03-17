import Link from 'next/link'
import React from 'react'

export default function AboutLayout({children}) {
  return (
    <div className=' p-3'>
      <h2 className='text-4xl font-semibold'>About Layout</h2>
      <ul className='flex gap-4 text-blue-500 py-3'>
        <li><Link href="/about/my">My</Link></li>
        <li><Link href="/about/your">Your</Link></li>
        <li><Link href="/about/our">Our</Link></li>
      </ul>
      {children}
    </div>
  )
}
