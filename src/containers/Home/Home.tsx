import React, { useContext, useState, useEffect } from 'react';
import { About, Technologies, Project, Contact, Story } from './components';
import { NavigationContext } from '@src/contexts/NavigationContext';
import { Link, scroller, animateScroll } from 'react-scroll';
import { useRouter } from 'next/router';

const Home = () => {
  const { section, changeSection } = useContext(NavigationContext);
  const [pageURL, setPageURL] = useState('');
  
  const { query } = useRouter();

  useEffect(() => {
    if(query.id === '#about') {
      setTimeout(() => {
        scroller.scrollTo('#about', {
          duration: 0, 
          smooth: true,
          offset: -120,
        })
      }, 0.2)
    } else if(query.id === "#tech") {
      setTimeout(() => {
        scroller.scrollTo('#tech', {
          duration: 0, 
          smooth: true,
          offset: -120,
        })
      }, 0.2)
    } else if(query.id === "#project") {
      setTimeout(() => {
        scroller.scrollTo('#project', {
          duration: 0, 
          smooth: true,
          offset: -120,
        })
      }, 0.2)
    } else if(query.id === "#contact") {
      setTimeout(() => {
        scroller.scrollTo('#project', {
          duration: 0, 
          smooth: true,
        })
      }, 0.2)
    }
  }, [query])

  useEffect(() => {
    setPageURL(window.location.origin);
    const path = window.location.href;
    if(path.includes('/?section=')) {
      const remove = window.location.origin + '/?section=';
      const getSection = '#' + window.location.href.replace(remove, '');
      changeSection(getSection);
    }
  }, []);

  useEffect(() => {
    const name = section.slice(1, section.length);
    if(window.history.pushState) {
      const newurl = pageURL + `?section=${name}`;
      window.history.pushState({path:newurl},'',newurl);
    }
  }, [section])

  return (
    <div className="bg--100 w-screen h-screen overflow-x-hidden">
      <div id="#about">
        <About />
        <Story />
      </div>
      <div id="#tech">
        <Technologies />
      </div>
      <div id="#project">
        <Project />
      </div>
      <div id="#contact">
        <Contact/>
      </div>
    </div>
  )
}

export default Home;