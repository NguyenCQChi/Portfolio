import React, { useContext, useRef, useEffect } from 'react';
import { Typing } from "@src/components";
import Image from 'next/image';
import { NavigationContext } from "@src/contexts/NavigationContext";

const headings= [
  'Front-end Developer',
  'Software Developer',
  'Mystery lover',
  'Coffee addictor'
]

const About = () => {
  const containerRef = useRef(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const  { changeSection } = useContext(NavigationContext);

  const callback = (entries: any) => {
    const [ entry ] = entries;

    if(entry.isIntersecting) {
      changeSection('#about')
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    observerRef.current = new IntersectionObserver(callback, options);
    if(containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if(containerRef.current) {
        observerRef.current?.unobserve(containerRef.current);
      }
    }
  }, [containerRef])

  return (
    <div className="w-screen h-screen" ref={containerRef}>
      <div className="w-full h-full relative bg-red-100">
        <div className='top-0 left-0 text-black w-full h-full flex flex-row justify-center items-center z-20 absolute p-32'>
          <div className='h-1/3 w-full flex flex-col justify-center gap-10 ml-20'>
            <div className='gap-4 flex flex-col'>
              <div className='text-6xl font-semibold text-red-900'>Hey, I am Chi. I am a</div>
              <Typing headings={headings} />
            </div>
            <div>
              <button className="bg-red-800 shadow-lg shadow-red-900 py-6 px-10 rounded-3xl text-red-100 text-xl w-1/2 border-black hover:translate-x-1 hover:-translate-y-1 transition-transform">
                <a href="Resume.pdf" download="Chi_Nguyen_resume">My Resume</a>
              </button>
            </div>
          </div>
          <div className='w-full h-full flex justify-center mt-20'>
            <Image 
              src='/portfolio.JPG'
              width={500}
              height={500}
              alt='Developer'
              className='h-full w-fit rounded-3xl shadow-md shadow-black-400'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About