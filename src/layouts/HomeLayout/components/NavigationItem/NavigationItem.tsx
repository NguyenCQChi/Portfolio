import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { NavigationContext} from '@contexts/NavigationContext';

type Props = {
  title: string,
  sectionName: string,
}

const NavigationItem = ({ title, sectionName } : Props) => {
  const { section, changeSection } = useContext(NavigationContext);
  const [ className, setClassName ] = useState<string>('')

  useEffect(() => {
    console.log("sectionName " + sectionName)
    console.log("section " + section)
    if(sectionName === section) {
      setClassName('active')
    } else {
      setClassName('link')
    }
  }, [section])

  const handleSetActive = () => {
    console.log("Im in active")
  }
  
  return (
    <Link
      activeClass="active"
      duration={100}
      smooth
      spy
      to={sectionName}
      offset={sectionName === '#contact' ? -300 : -140}
      className="link"
      onSetActive={() => changeSection(sectionName)}
      // onSetActive={handleSetActive}
    >
      {title}
    </Link>
  )
}

NavigationItem.defaultProps = {
  active: false
}

export default NavigationItem;