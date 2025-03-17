"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

export default function PathName() {
  const pathname = usePathname();
  return (
    <div className='text-yellow-500'>Pathname: {pathname}</div>
  )
}
