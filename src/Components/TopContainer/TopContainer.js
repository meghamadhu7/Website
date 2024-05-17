import React from 'react'
import { Element } from 'react-scroll'
import Topcontent from '../Topcontent/Topcontent';
import "./TopContainer.css";

const TopContainer = () => {
  return (
    <Element name="about" className="topcontainer">
          <Topcontent/>
    </Element>

  )
}

export default TopContainer