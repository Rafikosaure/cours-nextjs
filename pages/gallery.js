import React from 'react'
import Image from 'next/image'
import Image01 from '../public/assets/Img01.jpg'
import Image02 from '../public/assets/Img02.jpg'
import Image03 from '../public/assets/Img03.jpg'


export default function Gallery() {
  return (
    <div>
      <Image layout='responsive' placeholder='blur' src={Image01} width='2965' height='3783' alt='Architecture Image 1'/>
      <Image layout='responsive' placeholder='blur' src={Image02} width='4392' height='6587' alt='Architecture Image 2'/>
      <Image layout='responsive' placeholder='blur' src={Image03} width='2671' height='4000' alt='Architecture Image 3'/>
    </div>
  )
}
