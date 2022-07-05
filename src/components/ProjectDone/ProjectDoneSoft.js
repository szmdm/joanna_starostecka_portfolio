import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import {
    ProjectContainerSoft,
    FirstImageContainerSoft,
    FirstContainerSoft,
    FirstCSoftContentBox,
    FirstCSoftTitle,
    SecondContainerSoft,
    PackshotModul,
    Packshot,
    PackshotButton,

}
    from "./projectDoneSoftStyle"
import PDSoftImg_01 from "../../assets/projectsDone/pDSoft/point_module02_view_01_circle_1.png"
import PDSoftImg_02 from "../../assets/projectsDone/pDSoft/Hypo_allergenic_1.png"
import PDSoftImg_03 from "../../assets/projectsDone/pDSoft/Image_Module_01.png"
import PDSoftImg_04 from "../../assets/projectsDone/pDSoft/packshot_module02_01.png"
import PDSoftImg_05 from "../../assets/projectsDone/pDSoft/packshot_module02_02.png"
import PDSoftImg_06 from "../../assets/projectsDone/pDSoft/packshot_module02_03.png"
import PDSoftImg_07 from "../../assets/projectsDone/pDSoft/packshot_module02_04.png"
import PDSoftImg_08 from "../../assets/projectsDone/pDSoft/packshot_module02_05.png"

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
                    <PackshotModul>
                        <Packshot >
                            <img src={PDSoftImg_04} alt="/" />
                            <PackshotButton />
                        </Packshot>
                        <Packshot >
                            <img src={PDSoftImg_05} alt="/" />
                            <PackshotButton />
                        </Packshot>
                        <Packshot >
                            <img src={PDSoftImg_06} alt="/" />
                            <PackshotButton />
                        </Packshot>
                        <Packshot >
                            <img src={PDSoftImg_07} alt="/" />
                            <PackshotButton />
                        </Packshot>
                        <Packshot >
                            <img src={PDSoftImg_08} alt="/" />
                            <PackshotButton />
                        </Packshot>
                    </PackshotModul>
                    <span>hide shades</span>
                </SecondContainerSoft>
            </ProjectContainerSoft>
            {/* </Routes> */}
            {/* </Router> */}
        </>
    )
}
