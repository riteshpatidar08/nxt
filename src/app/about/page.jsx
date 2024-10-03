"use client" ;

import React from 'react'
import { useRouter } from 'next/navigation'

function About() {
  const router= useRouter() ;
  
const handleClick = () => {
 router.push('/login')
}
  return (
    <div>
   <h1>this is about page</h1>   
   <button onClick={handleClick}>Go to about</button>
    </div>
  )
}

export default About
