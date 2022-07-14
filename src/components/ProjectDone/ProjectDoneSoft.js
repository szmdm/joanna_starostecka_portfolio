import React, { useState } from 'react'

import PackshotModulComponent from '../Packshot/PackshotModulComponent';
import PackshotItemOneComponent from '../PackshotItemsComponent/PackshotItemOneComponent';
import PackshotItemTwoComponent from '../PackshotItemsComponent/PackshotItemTwoComponent';

import {
    ProjectContainerSoft,
    FirstImageContainerSoft,
    FirstContainerSoft,
    FirstCSoftContentBox,
    FirstCSoftTitle,
    SecondContainerSoft,
    ThirdContainerSoft,
    ThirdCSoftContent,
    ThirdCSoftText,

}
    from "./projectDoneSoftStyle"

import PDSoftImg_01 from "../../assets/projectsDone/pDSoft/point_module02_view_01_circle_1.png"
import PDSoftImg_02 from "../../assets/projectsDone/pDSoft/Hypo_allergenic_1.png"
import PDSoftImg_03 from "../../assets/projectsDone/pDSoft/Image_Module_01.png"
import PDSoftImg_14 from "../../assets/projectsDone/pDSoft/Image_Module_03_view_01.png"





//COMPONENT CODE


export const ProjectDoneSoft = () => {

    const [packshotStatus, setPackshotStatus] = useState(1)

    const DisplayComponent = () => {
        if (packshotStatus === 1) {
            return <PackshotModulComponent setPackshotStatus={setPackshotStatus}/>
        }
        if (packshotStatus === 2) {
            return <PackshotItemOneComponent />
        }
        if (packshotStatus === 3) {
            return <PackshotItemTwoComponent />
        }
    }


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
                        {DisplayComponent()}
                    </SecondContainerSoft>
                </ProjectContainerSoft>
                <ProjectContainerSoft>
                    <ThirdContainerSoft>
                    <img src={PDSoftImg_14} alt="" />
                        <ThirdCSoftContent>
                            <ThirdCSoftText>
                                <div className='number'>15</div>
                                <div className='under-number'>SPF<br />sun protection</div>
                            </ThirdCSoftText>
                            <div>aafsdf</div>
                        </ThirdCSoftContent>
                    </ThirdContainerSoft>
                </ProjectContainerSoft>
        </>
    )
}
