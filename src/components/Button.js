"use client"

import { useRouter } from "next/navigation"

export default function Button() {
  const router = useRouter();
  const goTo = () =>{
    router.push('/profile?id=123456789');
  }
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
      onClick={goTo}>
      Go to Profile
    </button>
  )
};
