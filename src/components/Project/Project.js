import React from 'react';
import { ProjectContainer, ProjectButton, ImgContainer, InfoContainer } from './projectStyle';
import { BsArrowRight } from 'react-icons/bs';



const Project = ({name, projectImg}) => {


  return (
    <>
      <ProjectContainer >
        <ImgContainer style={{backgroundImage: `url(${projectImg})`}} />
        <InfoContainer>
          <h1>{name}</h1>
          <ProjectButton to={"/project/" + name} >
            Landingpage and visuals
            <BsArrowRight style={{marginLeft: '20px'}} />
          </ProjectButton>
        </InfoContainer>
      </ProjectContainer>
    </>
  )
}

export default Project