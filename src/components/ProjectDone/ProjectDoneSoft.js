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
    FourthContainerSoft,
    FouthTitleBox,
    FourthContentContainer,
    FCCLeft,
    FCCRight,
    FCCTitle,
    FCCColors,
    FCCFonts,
    FCCLeftColors,
    FCCRightFonts,

}
    from "./projectDoneSoftStyle"

import PDSoftImg_01 from "../../assets/projectsDone/pDSoft/point_module02_view_01_circle_1.png"
import PDSoftImg_03 from "../../assets/projectsDone/pDSoft/Image_Module_01.png"
import PDSoftImg_14 from "../../assets/projectsDone/pDSoft/Image_Module_03_view_01.png"
import PDSoftImg_15 from "../../assets/projectsDone/pDSoft/color_module03_01.png"
import PDSoftImg_16 from "../../assets/projectsDone/pDSoft/color_module03_02.png"
import PDSoftImg_17 from "../../assets/projectsDone/pDSoft/color_module03_03.png"





//COMPONENT CODE


export const ProjectDoneSoft = () => {

    const [packshotStatus, setPackshotStatus] = useState(1)

    const DisplayComponent = () => {
        if (packshotStatus === 1) {
            return <PackshotModulComponent setPackshotStatus={setPackshotStatus} />
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
                            <div className='number'>hypo</div>
                            <div className='under-number'>allergenic</div>
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
                    <div className='footerText'>read more</div>
                    <ThirdCSoftContent>
                        <ThirdCSoftText>
                            <div className='number'>15</div>
                            <div className='under-number'>SPF<br />sun protection</div>
                        </ThirdCSoftText>
                    </ThirdCSoftContent>
                </ThirdContainerSoft>
            </ProjectContainerSoft>
            <ProjectContainerSoft>
                <FourthContainerSoft>
                    <FouthTitleBox>
                        Colors & Fonts
                    </FouthTitleBox>
                    <FourthContentContainer>
                        <FCCLeft>
                            <FCCTitle>
                                Colors
                            </FCCTitle>
                            <FCCColors>
                                <FCCLeftColors>
                                    <img src={PDSoftImg_15} alt="" />
                                    <span>Light Grey<br />#f6f6f6<br /></span>
                                </FCCLeftColors>
                                <FCCLeftColors>
                                    <img src={PDSoftImg_16} alt="" />
                                    <span>Light Grey<br />#f6f6f6<br /></span>
                                </FCCLeftColors>
                                <FCCLeftColors>
                                    <img src={PDSoftImg_17} alt="" />
                                    <span>Light Grey<br />#f6f6f6<br /></span>
                                </FCCLeftColors>
                            </FCCColors>
                        </FCCLeft>
                        <FCCRight>
                            <FCCTitle>
                                Colors
                            </FCCTitle>
                            <FCCFonts>
                                <FCCRightFonts fontFamily={"FuturaStd-Light"}>
                                    <div className='big'>Futura PT</div>
                                    <span>Light</span>
                                </FCCRightFonts>
                                <FCCRightFonts fontFamily={"FuturaStd-Book"}>
                                    <div className='big'>Futura PT</div>
                                    <span>Book</span>
                                </FCCRightFonts>
                            </FCCFonts>
                        </FCCRight>
                    </FourthContentContainer>
                </FourthContainerSoft>
            </ProjectContainerSoft>
        </>
    )
}
