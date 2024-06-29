import React, { useContext, useRef, useEffect } from 'react';
import { 
  JavaOriginal, 
  JavascriptOriginal, 
  NodejsOriginalWordmark, 
  ReactOriginal, 
  PythonOriginal, 
  PytorchOriginalWordmark,
  NextjsOriginal,
  FirebaseOriginal,
  MysqlOriginalWordmark,
  MongodbOriginalWordmark,
  AndroidstudioOriginal,
  COriginal
} from 'devicons-react';
import { NavigationContext } from '@src/contexts/NavigationContext';

const Technologies = () => {
  const containerRef = useRef(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const  { changeSection } = useContext(NavigationContext);

  const callback = (entries: any) => {
    const [ entry ] = entries;

    if(entry.isIntersecting) {
      changeSection('#tech')
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9
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
    <div className="w-screen h-fit py-20 px-32 bg-red-100 flex flex-col gap-16" ref={containerRef}>
      <div className="h-full grid grid-cols-6 justify-items-center gap-10">
        <JavaOriginal size="100" />
        <JavascriptOriginal size="100" />
        <NodejsOriginalWordmark size="100" />
        <ReactOriginal size="100" />
        <PythonOriginal size="100" />
        <PytorchOriginalWordmark size="100" />
        <NextjsOriginal size="100" />
        <FirebaseOriginal size="100" />
        <MysqlOriginalWordmark size="100" />
        <MongodbOriginalWordmark size="100" />
        <AndroidstudioOriginal size="100" />
        <COriginal size="100" />
      </div>
    </div>
  )
}

export default Technologies