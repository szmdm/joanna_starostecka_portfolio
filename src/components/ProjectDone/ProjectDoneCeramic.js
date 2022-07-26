import React from 'react';
import ScrollToTop from "../ScrollToTop";

import ProjectCeramic from './ProjectCeramic';

import PDCeramicImg_01 from "../../assets/projectsDone/pDCeramicStudio/Image_001.png"

const ProjectDoneCeramic = () => {

  return (
    <>
        <ScrollToTop>
           <ProjectCeramic
            titlePCCLeftOne='ceramic studio' 
            textPCCLeftOne='Sit in cupidatat adipisicing tempor eiusmod laboris elit eu reprehenderit occaecat veniam sunt reprehenderit.'
            textPCCLeftTwo='Reprehenderit esse officia non ut duis adipisicing.'
            imgPCCRight={PDCeramicImg_01}
            

           />
        </ScrollToTop>
    </>
  )
}

export default ProjectDoneCeramic

