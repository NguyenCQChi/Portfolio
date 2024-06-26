import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { NavigationContext} from '@contexts/NavigationContext';

type Props = {
  title: string,
  sectionName: string,
}

const NavigationItem = ({ title, sectionName } : Props) => {
  const { section, changeSection } = useContext(NavigationContext);
  const [ className, setClassnName ] = useState<string>('active')

  useEffect(() => {
    
  })
  
  return (
    <Link
      activeClass={className}
      duration={100}
      smooth
      spy
      to={sectionName}
      // offset
      className='link'
      onSetActive={() => changeSection(sectionName)}
    >
      {title}
    </Link>
  )
}

NavigationItem.defaultProps = {
  active: false
}

export default NavigationItem;