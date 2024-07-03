import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { NavigationContext} from '@contexts/NavigationContext';

type Props = {
  title: string,
  sectionName: string,
}

const NavigationItem = ({ title, sectionName } : Props) => {
  const { section, changeSection } = useContext(NavigationContext);
  const [ className, setClassName ] = useState<string>('active')

  useEffect(() => {
    if(sectionName === '#project' && section === '#contact') {
      setClassName('link')
    } else {
      setClassName('active')
    }
  }, [section])
  
  return (
    <Link
      activeClass={className}
      duration={50}
      smooth
      spy
      to={sectionName}
      offset={sectionName === '#tech' ? -300 : 0}
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