import React from 'react';
import PCCLeftContentOne from '../ProjectCeramicContent/PCCLeftContentOne';
import PCCLeftContentTwo from '../ProjectCeramicContent/PCCLeftContentTwo';
import PCCRightContentOne from '../ProjectCeramicContent/PCCRightContentOne';
import PCCRightContentTwo from '../ProjectCeramicContent/PCCRightContentTwo';
import PDCeramicImg_01 from "../../assets/projectsDone/pDCeramicStudio/Image_001.png"
import PDCeramicImg_02 from "../../assets/projectsDone/pDCeramicStudio/Image_002.png"


import {
    ProjectCeramicContainer,
} from './ProjectCeramicStyle';

const ProjectCeramic = () => {

    return (
        <>
            <div className='overall'>
                <ProjectCeramicContainer>
                    <PCCLeftContentOne
                        backgroundColorPCCLeft='#3e4136'
                        titlePCCLeftOne='ceramic studio1'
                        textPCCLeftOne='Sit in cupidatat adipisicing tempor eiusmod laboris elit eu reprehenderit occaecat veniam sunt reprehenderit.'
                        textPCCLeftTwo='Reprehenderit esse officia non ut duis adipisicing.'
                    />
                    <PCCRightContentOne
                        imgPCCRight={PDCeramicImg_01}
                    />
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentTwo
                        imgPCCLeft={PDCeramicImg_02}
                    />
                    <PCCRightContentTwo
                        titlePCCRightOne='ceramic studio2'
                        textPCCRightOne='Sit in cupidatat adipisicing tempor eiusmod laboris elit eu reprehenderit occaecat veniam sunt reprehenderit.'
                        textPCCRightTwo='Reprehenderit esse officia non ut duis adipisicing.'
                    />
                </ProjectCeramicContainer>
                <ProjectCeramicContainer>
                    <PCCLeftContentOne
                        backgroundColorPCCLeft='#3e4136'
                        titlePCCLeftOne='ceramic studio3'
                        textPCCLeftOne='Sit in cupidatat adipisicing tempor eiusmod laboris elit eu reprehenderit occaecat veniam sunt reprehenderit.'
                        textPCCLeftTwo='Reprehenderit esse officia non ut duis adipisicing.'
                    />
                    <PCCRightContentOne
                        imgPCCRight={PDCeramicImg_01}
                    />
                </ProjectCeramicContainer>
            </div>
        </>
    )
}

export default ProjectCeramic