import React, { useEffect } from 'react';
import FCColaImg_01 from "../../assets/projectsDone/pDCocaCola/Background_Image_Cola_1.png";
import FCColaImg_02 from "../../assets/projectsDone/pDCocaCola/Cola_Tablet_1.png";
import FCColaImg_03 from "../../assets/projectsDone/pDCocaCola/Cola_Web_1.png";
import FCColaImg_04 from "../../assets/projectsDone/pDCocaCola/Cola_IPhones_1.png";
import FCColaImg_05 from "../../assets/projectsDone/pDCocaCola/Cola_Tablet_2.png";
import FCColaImg_06 from "../../assets/projectsDone/pDCocaCola/Cola_Tablet_3.png";
import FCColaImg_07 from "../../assets/projectsDone/pDCocaCola/Coca_Cola_EC_KV_Image_1.png";
import {
    ProjectContainerCola,
    FirstContainerCola,
    ImageContainerCola,
    ImageBox,
    FCCTitle,
    FCCContentBox,
    FCCMobileContentBox,
    SecondContainerCola,
    SCCContentBox,
    ThirdContainerCola,
    ThirdContentContainer,
    TCCTitle,
    TCCFonts,
    TCCFontsBox,
    TCCFontsBox2,
    FourthContainerCola,
    FourthContentContainer,
    FourthCCTitle,
    FourthCCBox,
    FifthContainerCola,
    FifthCCTitle,
    FifthCCBox,
    SixthContainerCola,
    SixthContentContainerOne,
    SixthContentContainerTwo,
    SixthCCBox,

}
    from "./projectDoneCocaColaStyle";
import { useLocation } from 'react-router-dom';


export const ProjectDoneCocaCola = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location,])

    return (
        <>
            <ProjectContainerCola >
                <ImageContainerCola
                    backgroundLaptop={FCColaImg_01}
                    backgroundMobile={FCColaImg_07}
                >
                    <FirstContainerCola alignItems="center" flexDirection="column" >
                        <FCCTitle>
                            Together<br />
                            Tastes<br />
                            Better
                        </FCCTitle>
                        <FCCContentBox>
                            <img src={FCColaImg_02} alt="cola can shown on a tablet" />
                            {/* <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br /> ut labore et dolore magna aliqua.
                            </p> */}
                        </FCCContentBox>
                    </FirstContainerCola>
                </ImageContainerCola>
            </ProjectContainerCola>
            <ProjectContainerCola>
                <FCCMobileContentBox>
                    <img src={FCColaImg_02} alt="cola can shown on a tablet" />
                    <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br /> ut labore et dolore magna aliqua.
                            </p>
                </FCCMobileContentBox>
            </ProjectContainerCola>
            <ProjectContainerCola>
                <SecondContainerCola flexDirection="column">
                    <SCCContentBox>
                        <img src={FCColaImg_03} alt="cola webpage screen" />
                        <h1>
                            User Persona
                        </h1>
                    </SCCContentBox>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.
                    </p>
                </SecondContainerCola>
            </ProjectContainerCola>
            <ProjectContainerCola>
                <ThirdContainerCola>
                    <ThirdContentContainer>
                        <TCCTitle>
                            <h1>fonts</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br />
                                ut labore et dolore magna aliqua.
                            </p>
                        </TCCTitle>
                        <TCCFonts>
                            <TCCFontsBox>
                                <span>for headline</span>
                                <p1>
                                    TCCC
                                </p1>
                                <p2>
                                    TCCC UnityHeadline Bold
                                </p2>
                            </TCCFontsBox>
                            <TCCFontsBox2>
                                <span>for headline</span>
                                <p1>
                                    TCCC
                                </p1>
                                <p2>
                                    TCCC UnityHeadline Bold
                                </p2>
                            </TCCFontsBox2>
                        </TCCFonts>
                    </ThirdContentContainer>
                </ThirdContainerCola>
            </ProjectContainerCola>
            <ProjectContainerCola>
                <FourthContainerCola>
                    <FourthContentContainer>
                        <FourthCCTitle>
                            <h1>colors</h1>
                        </FourthCCTitle>
                        <FourthCCBox>
                            <img src={FCColaImg_04} alt="cola font presented in 3 colors white red black on mobile phone" />
                        </FourthCCBox>
                    </FourthContentContainer>
                </FourthContainerCola>
            </ProjectContainerCola>
            <ProjectContainerCola>
                <FifthContainerCola flexDirection="column" alignItems="center">
                    <FifthCCTitle>
                        <h1>shopping path</h1>
                    </FifthCCTitle>
                    <FifthCCBox>
                        <img src={FCColaImg_05} alt="cola can in cold cold ice presented on a tablet" />
                    </FifthCCBox>
                </FifthContainerCola>
            </ProjectContainerCola>
            <ProjectContainerCola>
                <SixthContainerCola flexDirection="column" alignItems="center">
                    <SixthContentContainerOne />
                    <SixthContentContainerTwo />
                    <SixthCCBox>
                        <img src={FCColaImg_06} alt="cola application" />
                    </SixthCCBox>
                </SixthContainerCola>
            </ProjectContainerCola>
        </>
    )
};
