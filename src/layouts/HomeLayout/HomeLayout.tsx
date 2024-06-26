import React, { ReactNode, useState } from 'react';
import { Navigation } from './components';
import { NavigationProvider } from '@contexts/NavigationContext';
import cln from 'classnames';
import { Drawer } from '@components';
import * as PropTypes from 'prop-types';

type Props = {
  children: ReactNode, 
  className?: string
}

const HomeLayout = ({ className, children } : Props) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={cln(className, 'container flex flex-col')}>
      <NavigationProvider>
        <Navigation toggleDrawer={handleToggle} className='z-[30]' />
        {/* <Drawe */}
        {children}
      </NavigationProvider>
    </div>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node
}

export default HomeLayout