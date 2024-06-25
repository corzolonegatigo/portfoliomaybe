import React from 'react'
import {projects} from '../data/index'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Button from './ui/button'


const AllProjects = () => {

  return (
    <div className='py-20'>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x24 gap-y12 mt-10 '>
            {projects.map(({ id, title, des, img, iconLists, link, opt}) => (
                <div key={id} className='lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] sm:h-[41rem] h-[32rem]'>
                    
                    <PinContainer title={opt} href = {link}>
                        <a href={link} target="_blank">
                        <div className='relative flex items-center justify-center sm:w-[500px] w-[80vw] sm:h-[40vh] h-[25vh] overflow-hidden lg:h-[50vh]'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>

                                    <img src={"/bg.png"} alt={"bg-img"}/>     
                                
                            </div>
                            <img src={img} alt={title} className='z-10 absolute bottom-0'></img> 
                        </div>
                        </a>
                        <a href={link}>
                        <h1 className='font-semibold lg:text-xl md:text-l text-base line-clamp-1 text-center pt-3 pb-1'> 
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-xs line-clamp-4 text-center'>
                            {des}
                        </p>
                        </a>
                        
                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                            {iconLists.map((icon, index) => (
                                <div
                                key={index}
                                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                style={{
                                    transform: `translateX(-${5 * index + 2}px)`,
                                }}
                                >
                                    <img src={icon} alt="icon5" className="p-2" />
                                </div>
                            ))}
                            </div>
                            {id != 1 && (
                                <div className='flex justify-center items-center'>
                                    <a className='flex lg:text-normal md:text-xs text-sm font-semibold text-purple fill-slate-500 text-center'
                                    href={link}
                                    >
                                        Click to learn more!
                                    </a>
                                    <FaLocationArrow className='ms-3' color='#CBACF9'/>
                                </div>
                            )}

                            
                            </div>

                    </PinContainer>



                </div>

            ))}
      
        </div>

    </div>
  )
}

export default AllProjects
