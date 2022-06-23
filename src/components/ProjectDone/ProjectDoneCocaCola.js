import React from 'react';
import FCColaImg_01 from "../../assets/projectsDone/pDCocaCola/Background_Image_Cola_1.png";
import FCColaImg_02 from "../../assets/projectsDone/pDCocaCola/Cola_Tablet_1.png";
import FCColaImg_03 from "../../assets/projectsDone/pDCocaCola/Cola_Web_1.png";
import {
    ProjectContainerCola,
    FirstContainerCola,
    ImageContainerCola,
    FCCTitle,
    FCCContentBox,
    SecondContainerCola,
    SCCContentBox,

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
                        <p>
                            User Persona
                        </p>
                    </SCCContentBox>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt<br /> ut labore et dolore magna aliqua.
                    </p>
                </SecondContainerCola>
            </ProjectContainerCola>
        </>
    )
};
