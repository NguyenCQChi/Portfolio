import { useEffect, useState } from "react";

const useScrollThreshold = ({threshold = 10}) => {
  const [ isScrollThresPassed, setIsScrollThresPassed ] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrollThresPassed(window.scrollY > threshold);
    }

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, {
      capture: true,
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', updateScrollState)
    }
  }, [])

  return { isScrollThresPassed }
}

export default useScrollThreshold