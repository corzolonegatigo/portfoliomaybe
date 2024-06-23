import { testimonials } from '@/data/index'
import React from 'react'
import { InfiniteMovingCards } from './ui/compcards'
import ButtonType2 from './ui/buttonType2'

const Competitions = () => {
  return (
    <div className='py-20' id="competitions">
        <h1 className='heading'> 
            <span className='text-purple'>Competitions</span>
            {' '} I took part in
        </h1>

        <div className='flex flex-col items-center pt-10 pb-10'>
            <div className='h-[40vh] md:h-[40rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="normal"
            />
            </div>
            <h1 className='heading text-black-100'>
                filler filler filler filler filler filler filler filler 
            </h1>
        </div>
        



    </div>
    
  )
}

export default Competitions