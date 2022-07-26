import React from 'react';


import {
    ProjectCeramicContainer,
    PCCLeft,
    PCCRight,
    PCCLeftOne,
    PCCLeftTwo,
    PCCRightOne,
    PCCRightTwo,

} from './ProjectCeramicStyle';

const ProjectCeramic = ({ ...props }) => {

    console.log(props.imgPCCRight);

    return (
        <>
            <ProjectCeramicContainer>
                <PCCLeft>
                    <PCCLeftOne>
                        <h1>{props.titlePCCLeftOne}</h1>
                        <p>{props.textPCCLeftOne}</p>
                    </PCCLeftOne>
                    <PCCLeftTwo>
                        <h1>{props.titlePCCLeftTwo}</h1>
                        <p>{props.textPCCLeftTwo}</p>
                    </PCCLeftTwo>
                </PCCLeft>
                <PCCRight imgPCCRight={props.imgPCCRight}>
                    {/* <img src={props.imgPCCRight} alt="/" /> */}
                    <PCCRightOne>

                    </PCCRightOne>
                    <PCCRightTwo>

                    </PCCRightTwo>
                </PCCRight>
            </ProjectCeramicContainer>
        </>
    )
}

export default ProjectCeramic