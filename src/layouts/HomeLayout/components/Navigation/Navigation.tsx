import React, { useContext, useEffect } from 'react';
import NavigationItem from '../NavigationItem';
import cln from 'classnames';
import { useRouter } from 'next/router';
import { NavigationContext } from '@src/contexts/NavigationContext';

type Props = {
  className?: string;
  toggleDrawer: () => void;
}

const Navigation = ({ className, toggleDrawer } : Props) => {
  const router = useRouter();
  const { section } = useContext(NavigationContext);

  // useEffect(() => {
  //   console.log(section + " 1");
  // }, [section])

  return (
    <div className="w-full flex justify-center">
      <div className={cln('w-[60%] fixed top-8 h-20 px-10 xs:px-3 flex rounded-3xl', className)} style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
        <div className='flex items-center justify-center h-full flex-1 gap-12 md:hidden text-[18px] font-medium'>
          <NavigationItem sectionName='#about' title='About' />
          <NavigationItem sectionName='#tech' title='Technologies' />
          <NavigationItem sectionName='#project' title='Project' />
          <NavigationItem sectionName='#contact' title='Contact' />
        </div>
      </div>
    </div>
  )
}

export default Navigation