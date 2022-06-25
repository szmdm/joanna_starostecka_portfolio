import React from 'react';
import FCColaImg_01 from "../../assets/projectsDone/pDCocaCola/Background_Image_Cola_1.png";
import FCColaImg_02 from "../../assets/projectsDone/pDCocaCola/Cola_Tablet_1.png";
import FCColaImg_03 from "../../assets/projectsDone/pDCocaCola/Cola_Web_1.png";
import FCColaImg_04 from "../../assets/projectsDone/pDCocaCola/Cola_IPhones_1.png";
import {
    ProjectContainerCola,
    FirstContainerCola,
    ImageContainerCola,
    FCCTitle,
    FCCContentBox,
    SecondContainerCola,
    SCCContentBox,
    ThirdContainerCola,
    ThirdContentContainer,
    TCCTitle,
    TCCFonts,
    TCCFontsBox,
    FourthContainerCola,
    FourthContentContainer,
    FourthCCTitle,
    FourthCCBox,

}
    from "./projectDoneCocaColaStyle";



export const ProjectDoneCocaCola = () => {
    return (
        <>
            <ProjectContainerCola >
                <ImageContainerCola>
                    <img src={FCColaImg_01} alt="" />

                    <FirstContainerCola alignItems="center" flexDirection="column" >
                        <FCCTitle>
                            Together<br />
                            Tastes<br />
                            Better
                        </FCCTitle>
                        <FCCContentBox>
                            <img src={FCColaImg_02} alt="cola can shown on a tablet" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br /> ut labore et dolore magna aliqua.
                            </p>
                        </FCCContentBox>
                    </FirstContainerCola>
                </ImageContainerCola>
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
                            <h1>typography</h1>
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
                            <TCCFontsBox>
                                <span>for headline</span>
                                <p1>
                                    TCCC
                                </p1>
                                <p2>
                                    TCCC UnityHeadline Bold
                                </p2>
                            </TCCFontsBox>
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
        </>
    )
};
