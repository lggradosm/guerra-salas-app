import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ServiceItem({image,title,text}) {
  return (
    <div className='flex flex-col w-[calc(90%-2rem)] lg:w-[calc(50%-2rem)] 2xl:w-[calc(33.33%-2rem)] border-neutral-100 border-2 rounded-xl p-6 cursor-pointer justify-between'>
          <Image alt='escrituras publica' src={image} className="w-full rounded-[.2rem]" />
          <h2 className='text-lg md:text-2xl text-primary font-semibold py-3'>{title}</h2>
          <p className='text-sm  md:text-md'>
            {text}
          </p>
          <Link href={"#"} className="block  hover:border-primary hover:underline border-white border-2 rounded-xl p-3 duration-200 text-primary text-center mt-6">Ver requisitos</Link>
        </div>
  )
}
