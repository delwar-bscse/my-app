"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Menu() {
  const pathname = usePathname();
  return (
    <ul className='flex items-center gap-4 p-2'>
      <li><Link href="/" className={pathname === '/' ? 'text-red-500' : ''}>Home</Link></li>
      <li><Link
        href={{ pathname: '/product', query: { page: 1, price: 100 } }}
        className={pathname === '/product' ? 'text-red-500' : ''}>
        Product
      </Link></li>
      <li><Link href="/about" className={pathname === '/about' ? 'text-red-500' : ''}>About</Link></li>
      <li><Link
        href={{ pathname: '/profile', query: { id: 1 } }}
        className={pathname === '/profile' ? 'text-red-500' : ''}>
        Profile
      </Link></li>
    </ul>
  )
};
