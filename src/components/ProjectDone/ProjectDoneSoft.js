import React, { useState } from 'react'
import ScrollToTop from "../ScrollToTop";

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
    FifthContainerSoft,
    FifthCSoftContent,
    SixthContainerSoft,
    SixthCSoftTitle,
    SixthCContent,
    SCCLeft,
    SCCTitle,
    SCCLeftContent,
    SCCLeftFooter,
    SCCRight,
    SCCRightContent,
    SCCRightTitle,
    FormButton,
    SCCRightFooter,
    SixthCSubtitle,
}
    from "./projectDoneSoftStyle"

import PDSoftImg_01 from "../../assets/projectsDone/pDSoft/point_module02_view_01_circle_1.png"
import PDSoftImg_03 from "../../assets/projectsDone/pDSoft/Image_Module_01.png"
import PDSoftImg_14 from "../../assets/projectsDone/pDSoft/Image_Module_03_view_01.png"
import PDSoftImg_15 from "../../assets/projectsDone/pDSoft/color_module03_01.png"
import PDSoftImg_16 from "../../assets/projectsDone/pDSoft/color_module03_02.png"
import PDSoftImg_17 from "../../assets/projectsDone/pDSoft/color_module03_03.png"
import PDSoftImg_18 from "../../assets/projectsDone/pDSoft/Image_Module_03_view_05.png"
import PDSoftImg_19 from "../../assets/projectsDone/pDSoft/Mastercard.png"
import PDSoftImg_20 from "../../assets/projectsDone/pDSoft/paypall.png"
import PDSoftImg_21 from "../../assets/projectsDone/pDSoft/visa.png"
import PDSoftImg_22 from "../../assets/projectsDone/pDSoft/Mastercard_big.png"





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
            <ScrollToTop>
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
                                        <span>Light Grey<br />#e6e4e5<br /></span>
                                    </FCCLeftColors>
                                    <FCCLeftColors>
                                        <img src={PDSoftImg_17} alt="" />
                                        <span>Light Grey<br />#10141f<br /></span>
                                    </FCCLeftColors>
                                </FCCColors>
                            </FCCLeft>
                            <FCCRight>
                                <FCCTitle>
                                    Fonts
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
                <ProjectContainerSoft>
                    <FifthContainerSoft>
                        <img src={PDSoftImg_18} alt="" />
                        <FifthCSoftContent>
                            <div className='user'>User Persona</div>
                            <span>
                                Made with broad spectrum SPF 15 sunscreen with titanium dioxide,
                                the full coverage foundation helps to protect skin from dangerous
                                UVA/UVB rays that can burn and prematurely age skin
                            </span>
                        </FifthCSoftContent>
                    </FifthContainerSoft>
                </ProjectContainerSoft>
                <ProjectContainerSoft>
                    <SixthContainerSoft>
                        <SixthCSoftTitle>
                            Design System
                        </SixthCSoftTitle>
                        <SixthCContent>
                            <SCCLeft>
                                <SCCTitle>
                                    Buttons&Tags
                                </SCCTitle>
                                <SCCLeftContent>
                                    <div className='leftBox addCart'>add to card</div>
                                    <div className='leftBox buyNow'>buy now</div>
                                    <div className='leftBox seeAll'>see all shades</div>
                                </SCCLeftContent>
                                <SCCLeftFooter>
                                    -        <span>2</span>        +
                                </SCCLeftFooter>
                            </SCCLeft>
                            <SCCRight>
                                <SCCRightTitle>
                                    Text Inputs
                                </SCCRightTitle>
                                <SCCRightContent>
                                    <FormButton border="2px solid #CCCBCB;" >
                                        John Black
                                    </FormButton>
                                    <FormButton border="none" display="none">
                                        <div className='empty'></div>
                                    </FormButton>
                                    <FormButton border="2px solid #CCCBCB;">
                                        <span>+48  </span>
                                        793 182 713
                                    </FormButton>
                                    <FormButton border="2px solid #CCCBCB;">
                                        <img src={PDSoftImg_19} alt='/' />
                                        &nbsp;0000 0000 0000 0000
                                    </FormButton>
                                </SCCRightContent>
                                <SCCRightFooter>
                                    <div className='sccRightTitle'>Payment</div>
                                    <div className='sccRightIcons'>
                                        <img src={PDSoftImg_22} alt='/' />
                                        <img src={PDSoftImg_21} alt='/' />
                                        <img src={PDSoftImg_20} alt='/' />
                                    </div>
                                </SCCRightFooter>
                            </SCCRight>
                        </SixthCContent>
                        <SixthCSubtitle>
                            Photos by Anna Shvets
                        </SixthCSubtitle>
                    </SixthContainerSoft>
                </ProjectContainerSoft>
            </ScrollToTop>
        </>
    )
}
