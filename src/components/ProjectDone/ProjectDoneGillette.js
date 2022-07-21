import React from "react";
import {
  ProjectContainer,
  BiggerContainerGilette,
  InsideBiggerContainerGilette,
  BCGOne,
  BCGTwo,
  BCGOneContainer,
  SmallerContainerGilette,
  SCGOne,
  SCGTwo,
  SCGThree,
  BGHead,
  BGHeadDescription1,
  BGHeadDescription2,
  BGHeadDescription3,
  BGTitle,
  BGContent,
  SCGImg,
  ColorContainer,
  ColorBox,
  TextBox,
  IPadContainer,
  BCGTwoColor,
  BGHeadFidelity,
  BCGTwoColorTitle,
} from "./projectDoneGilletteStyle";
import BCGOne_1 from "../../assets/projectsDone/pDGillette/IPad_01-1.png";
import BCGTwo_1 from "../../assets/projectsDone/pDGillette/Gillette_logo_02-1.png";
import SCGImg_1 from "../../assets/projectsDone/pDGillette/Fusion_Logo-1.png";
import SCGImg_2 from "../../assets/projectsDone/pDGillette/Icons-1.png";
import SCGImg_3 from "../../assets/projectsDone/pDGillette/gillette_image_02.png";
import SCGImg_4 from "../../assets/projectsDone/pDGillette/font_01.png";
import SCGImg_5 from "../../assets/projectsDone/pDGillette/font_02.png";
import BCGImg_1 from "../../assets/projectsDone/pDGillette/Image_03.png";
import BCGImg_2 from "../../assets/projectsDone/pDGillette/IPad_view_1.png";
import GilletteImg_01 from "../../assets/projectsDone/pDGillette/Gillette_02_background.png";
import GilletteImg_02 from "../../assets/projectsDone/pDGillette/Gillette_03_background.png";
import GilletteImg_03 from "../../assets/projectsDone/pDGillette/Gillette_04_background.png";
import GilletteImg_04 from "../../assets/projectsDone/pDGillette/Gillette_03_background_2.png";
import ScrollToTop from "../ScrollToTop";


export const ProjectDoneGilette = () => {
  return (
    <>
      <ScrollToTop />
      <BiggerContainerGilette>
        <ProjectContainer alignItems="center">
          <BCGOne width="50%">
            <BCGOneContainer>
              <img src={BCGOne_1} alt="content presented on tablet" />
            </BCGOneContainer>
          </BCGOne>
          <BCGTwo margin="5px 0 100px 0">
            <BGHead width="auto" display="flex">
              <img src={BCGTwo_1} alt="gillette logo" />
              <BGHeadDescription1 textcolor="#fff">
                The Best a man can get
              </BGHeadDescription1>
            </BGHead>
            <BGContent>
              <BGTitle textcolor="#fff">
                Landingpage for campagne
              </BGTitle>
              <BGHeadDescription2 textcolor="#fff">
                Becoming the best doesn’t happen overnight.<br />
                There’s always room for improvement.
              </BGHeadDescription2>
            </BGContent>
          </BCGTwo>
        </ProjectContainer>
      </BiggerContainerGilette>
      <SmallerContainerGilette alignItems="center" maxHeight="500px" backgroundImage={GilletteImg_01}>
        <ProjectContainer alignItems="center">
          <SCGOne margin="6rem 3rem 0.6rem 0rem">
            <BGHead width="380px" mediaWidth="100%">
              <BGTitle textcolor="#1A316D">
                Campain gap
              </BGTitle>
              <BGHeadDescription2 textcolor="#1A316D">
                Becoming the best doesn’t happen overnight.
                <br /> There’s always room for improvement.
              </BGHeadDescription2>
            </BGHead>
            <BGContent>
              <SCGImg>
                <img src={SCGImg_1} alt="gillette fusion logo" height="60px" width="209px" />
                <img src={SCGImg_2} alt="gillette icons" />
              </SCGImg>
            </BGContent>
          </SCGOne>
          <SCGTwo>
            <img src={SCGImg_3} alt="gillette exploded view" />
          </SCGTwo>
        </ProjectContainer>
      </SmallerContainerGilette>
      <BiggerContainerGilette backgroundImage={GilletteImg_02}>
        <ProjectContainer alignItems="center">
          <BCGOne>
            <BCGOneContainer>
              <img src={BCGImg_1} alt="young couple on a smartphone screen" />
            </BCGOneContainer>
          </BCGOne>
          <BCGTwo margin="100px 0 100px 80px">
            <BGContent>
              <BGTitle textcolor="#fff">
                User persona
              </BGTitle>
              <BGHeadDescription2 textcolor="#fff">
                Becoming the best doesn’t happen overnight.
                <br /> There’s always room for improvement.
              </BGHeadDescription2>
            </BGContent>
          </BCGTwo>
        </ProjectContainer>
      </BiggerContainerGilette>
      <SmallerContainerGilette alignItems="flex-end" maxHeight="500px" backgroundImage={GilletteImg_03}>
        <ProjectContainer alignItems="flex-end">
          <SCGOne margin="0.6rem 7rem 0.6rem 0rem">
            <BGHead width="380px" mediaWidth="100%">
              <BGTitle textcolor="#1A316D">
                Typography
              </BGTitle>
              <BGHeadDescription2 textcolor="#1A316D">
                Becoming the best doesn’t happen overnight.
                <br /> There’s always room for improvement.
              </BGHeadDescription2>
            </BGHead>
            <BGContent height="200px">
              <SCGImg>
                <img src={SCGImg_4} alt="" height="171px" width="311px" />
              </SCGImg>
              <BGHeadDescription3 textcolor="#1A316D" position="absolute" fontWeight="bold">
                Futura STD Bold
                <br /> Aa Bb Cc
              </BGHeadDescription3>
            </BGContent>
          </SCGOne>
          <SCGThree>
            <BGContent height="200px">
              <SCGImg>
                <img src={SCGImg_5} alt="" height="175px" width="248px" />
              </SCGImg >
              <BGHeadDescription3 textcolor="#1A316D" position="absolute" fontWeight="lighter">
                Futura STD Bold
                <br /> Aa Bb Cc
              </BGHeadDescription3>
            </BGContent>
          </SCGThree>
        </ProjectContainer>
      </SmallerContainerGilette>
      <BiggerContainerGilette backgroundImage={GilletteImg_04} >
        <ProjectContainer alignItems="center" flexDirection="column">
          <BCGOne />
          <BCGTwoColorTitle margin="60px 10px 10px 10px">
            <BGTitle textcolor="#fff">
              User persona
            </BGTitle>
          </BCGTwoColorTitle>
          <InsideBiggerContainerGilette>
            <BCGTwoColor>
              <ColorContainer>
                <ColorBox backgroundColor="#10141f" />
                <TextBox textcolor="#fff">
                  Blue
                  <br /> Colour for buttons
                </TextBox>
              </ColorContainer>
              <ColorContainer>
                <ColorBox backgroundColor="#1a316d" />
                <TextBox textcolor="#fff">
                  Blue
                  <br /> Colour for buttons
                </TextBox>
              </ColorContainer>
            </BCGTwoColor>
            <BCGTwoColor>
              <ColorContainer>
                <ColorBox backgroundColor="#131524" />
                <TextBox textcolor="#fff">
                  Blue
                  <br /> Colour for buttons
                </TextBox>
              </ColorContainer>
              <ColorContainer>
                <ColorBox backgroundColor="#fff" />
                <TextBox textcolor="#fff">
                  Blue
                  <br /> Colour for buttons
                </TextBox>
              </ColorContainer>
            </BCGTwoColor>
          </InsideBiggerContainerGilette>
        </ProjectContainer>
      </BiggerContainerGilette>
      <SmallerContainerGilette alignItems="flex-end" backgroundImage={GilletteImg_01}>
        <SCGOne margin="6.7rem 3rem 0rem 1rem">
          <BGHeadFidelity mediaWidth="100%">
            <BGTitle textcolor="#1A316D">
              High fidelity mockup
            </BGTitle>
            <BGHeadDescription2 textcolor="#1A316D">
              Becoming the best doesn’t happen overnight.
              <br /> There’s always room for improvement.
            </BGHeadDescription2>
          </BGHeadFidelity>
        </SCGOne>
        <SCGThree />
      </SmallerContainerGilette>
      <BiggerContainerGilette>
        <IPadContainer>
          <img src={BCGImg_2} alt="" />
        </IPadContainer>
      </BiggerContainerGilette>

    </>
  );
};
