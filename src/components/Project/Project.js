import React from 'react';
import { ProjectContainer, ProjectButton, ImgContainer, InfoContainer, ArrowIcon } from './projectStyle';

import ArrowImg from '../../assets/Arrow--right.png';



const Project = ({ projectName, projectImg }) => {


  return (
    <>
      <ProjectContainer name={projectName} >
        <ImgContainer style={{ backgroundImage: `url(${projectImg})` }} />
        <InfoContainer>
          <h1>{projectName}</h1>
          <div className='goProject'>
            <ProjectButton to={"/project/" + projectName} >
              Landingpage and visuals
            <ArrowIcon>
            <img src={ArrowImg} alt='move to the project icon' />
            </ArrowIcon>
            </ProjectButton>
          </div>
        </InfoContainer>
      </ProjectContainer>
    </>
  )
}

export default Project