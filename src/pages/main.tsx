import React from 'react'

import MyHeader from './MyHeader';
import MyCarousel from './MyCarousel';
import AboutMe from './AboutMe';
import MyExperience from './MyExperience';
import MyFooter from './MyFooter';
import MyAcademics from './MyAcademics';
import MyQuery from './MyQuery';

const main = () => {
    return (
        <div>
            <MyHeader/>
      <MyCarousel/>
      <AboutMe/>
      <MyAcademics/>
      <MyExperience/>
      <MyQuery/>
      <MyFooter/>
        </div>
    )
}

export default main
