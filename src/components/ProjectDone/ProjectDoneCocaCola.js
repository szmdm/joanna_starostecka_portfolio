import React from 'react';
import FCColaImg_01 from "../../assets/projectsDone/pDCocaCola/Background_Image_Cola_1.png";
import FCColaImg_02 from "../../assets/projectsDone/pDCocaCola/Cola_Tablet_1.png";
import {
    ProjectContainerCola,
    FirstContainerCola,
    ImageContainerCola,
    FCCTitle,
    FCCContentBox,

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
                </FCCContentBox>
            </FirstContainerCola>
            </ImageContainerCola>
        </ProjectContainerCola>
    </>
  )
};
