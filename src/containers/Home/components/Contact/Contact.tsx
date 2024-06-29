import React, { useContext, useRef, useEffect } from 'react';
import { NavigationContext } from "@src/contexts/NavigationContext";

const Contact = () => {
  const containerRef = useRef(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const  { changeSection } = useContext(NavigationContext);

  const callback = (entries: any) => {
    const [ entry ] = entries;

    if(entry.isIntersecting) {
      changeSection('#contact')
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
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
    <div className="w-screen h-fit px-32 py-20 bg-red-950 text-white flex justify-center" ref={containerRef}>
      <div className="w-full flex flex-row justify-start gap-40">
        <div className='text-3xl flex items-center'>Chi Nguyen</div>
        <div className="border-l-white border-l-2 h-full"></div>
        <div className='flex flex-col' >
          <div> <a href="https://www.linkedin.com/in/chinguyen19/" target="_blank" className="contact_link">LinkedIn</a> </div>
          <div> <a href="https://github.com/NguyenCQChi" target="_blank" className="contact_link"> Github </a> </div>
          <div>chinsu190103@gmail.com</div>
        </div>
      </div>
    </div>
  )
}

export default Contact