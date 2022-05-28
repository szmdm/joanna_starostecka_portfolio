import React from 'react';
import { ProjectContainer, ProjectButton, ImgContainer, InfoContainer } from './projectStyle';
import { BsArrowRight } from 'react-icons/bs';



const Project = ({ projectName, projectImg }) => {


  return (
    <>
      <ProjectContainer name={projectName} >
        <ImgContainer style={{backgroundImage: `url(${projectImg})`}} />
        <InfoContainer>
          <h1>{projectName}</h1>
          <ProjectButton to={"/project/" + projectName} >
            Landingpage and visuals
            <BsArrowRight style={{marginLeft: '20px'}} />
          </ProjectButton>
        </InfoContainer>
      </ProjectContainer>
    </>
  )
}

export default Project