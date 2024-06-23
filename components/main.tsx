import React from 'react'
import { Spotlight } from './ui/spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'

const Main = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill='grey'/>
            <Spotlight className='top-28 left-80  h-[80vh] w-[50vw]' fill='white'/>
        </div>
        <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-300 max-w-80">
            Programmer, Developer, Changemaker
          </p>
            <TextGenerateEffect className='text-center text-[45px] md:text-5xl lg:text-6xl' words='Hello! I am Zac' />
            <p className='text-center md:tracking-wide mb-4 text-[10px] md:text-md lg:text-2xl'>
              A Creative with a Passion for Technology.
            </p>
          </div>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
    </div>
  )
}

export default Main
