import React from 'react'

export default async function User({children}) {
  const res = await fetch('http://localhost:3000/profile/api', {cache: 'no-store'});
  const data = await res.json();
  return (
    <div>
      {children}
      User {data.name}
    </div>
  )
}
