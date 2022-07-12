import React, { useState } from 'react'

import PackshotModulComponent from '../Packshot/PackshotModulComponent';
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





//COMPONENT CODE

let displayStyle = {
    display: "none;"
}


export const ProjectDoneSoft = () => {

    const [packshotStatus, setPackshotStatus] = useState()
    const packshotTrigger = () => {setPackshotStatus(!packshotStatus)}

    console.log(packshotStatus)


    return (
        <>
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
                <ProjectContainerSoft>
                    <SecondContainerSoft alignItems="center" flexDirection="row">
                        <PackshotModulComponent packshotTrigger={packshotTrigger} displayStatus={packshotStatus} />
                        <PackshotItemOneComponent style={displayStyle} />
                        {/* <span>hide shades</span> */}
                    </SecondContainerSoft>
                </ProjectContainerSoft>
        </>
    )
}
