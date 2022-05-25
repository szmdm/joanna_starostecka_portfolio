import React from 'react';
import { ProjectData } from './PojectNameData';
import { ProjectNameContainer, } from './projectNameStyle';

export const ProjectName = ({name}) => {

    const projectImage = ProjectData[name]

    return (
        <ProjectNameContainer>
            {projectImage.map((element, index) => {

                return (
                    <div key={index}>
                        <img src={process.env.PUBLIC_URL + element.image}
                            alt='/'
                            className='image'
                        />
                    </div>

                )
            })}

        </ProjectNameContainer>

    )
}
