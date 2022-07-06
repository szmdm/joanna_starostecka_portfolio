import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import PackshotModulComponent from '../Packshot/PackshotModul';
import PackshotItemOneComponent from '../PackshotItemsComponent/PackshotItemOneComponent';

import {
    ProjectContainerSoft,
    FirstImageContainerSoft,
    FirstContainerSoft,
    FirstCSoftContentBox,
    FirstCSoftTitle,
    SecondContainerSoft,

}
from "./projectDoneSoftStyle"

import PDSoftImg_01 from "../../assets/projectsDone/pDSoft/point_module02_view_01_circle_1.png"
import PDSoftImg_02 from "../../assets/projectsDone/pDSoft/Hypo_allergenic_1.png"
import PDSoftImg_03 from "../../assets/projectsDone/pDSoft/Image_Module_01.png"


export const ProjectDoneSoft = () => {

    return (
        <>
            {/* <Router> */}
            <ProjectContainerSoft>
                <FirstImageContainerSoft>
                    <img src={PDSoftImg_03} alt="" />
                    <FirstContainerSoft alignItems="center" flexDirection="column" >
                        <FirstCSoftContentBox>
                            <img src={PDSoftImg_01} alt="/" />
                        </FirstCSoftContentBox>
                        <FirstCSoftTitle>
                            <img src={PDSoftImg_02} alt="/" />
                        </FirstCSoftTitle>
                    </FirstContainerSoft>
                </FirstImageContainerSoft>
            </ProjectContainerSoft>
            {/* <Routes> */}
            <ProjectContainerSoft>
                <SecondContainerSoft alignItems="center" flexDirection="row">
                    {/* <PackshotModulComponent /> */}
                    {/* <span>hide shades</span> */}
                    <PackshotItemOneComponent />
                </SecondContainerSoft>
            </ProjectContainerSoft>
            {/* </Routes> */}
            {/* </Router> */}
        </>
    )
}
