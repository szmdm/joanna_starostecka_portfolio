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
import ScrollToTop from "../ScrollToTop";


export const ProjectDoneGilette = () => {
  return (
    <>
    <ScrollToTop />
      <BiggerContainerGilette>
        <ProjectContainer alignItems="center">
          <BCGOne>
            <BCGOneContainer>
              <img src={BCGOne_1} alt="content presented on tablet" />
            </BCGOneContainer>
          </BCGOne>
          <BCGTwo margin="100px 0 100px 0">
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
                Becoming the best doesn’t happen overnight.
                <br /> There’s always room for improvement.
              </BGHeadDescription2>
            </BGContent>
          </BCGTwo>
        </ProjectContainer>
      </BiggerContainerGilette>
      <SmallerContainerGilette alignItems="center" maxHeight="500px">
        <ProjectContainer alignItems="center">
          <SCGOne margin="0.6rem 3rem 0.6rem 0rem">
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
              <BGHeadDescription2 textcolor="#1A316D">
                Becoming the best doesn’t happen overnight.
                <br /> There’s always room for improvement.
              </BGHeadDescription2>
            </BGContent>
          </SCGOne>
          <SCGTwo>
            <img src={SCGImg_3} alt="gillette exploded view" />
          </SCGTwo>
        </ProjectContainer>
      </SmallerContainerGilette>
      <BiggerContainerGilette>
      <ProjectContainer alignItems="center">
        <BCGOne>
          <BCGOneContainer>
            <img src={BCGImg_1} alt="young couple on a smartphone screen" />
          </BCGOneContainer>
        </BCGOne>
        <BCGTwo margin="100px 0 100px 0">
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
      <SmallerContainerGilette alignItems="flex-end" maxHeight="500px">
      <ProjectContainer alignItems="flex-end">
        <SCGOne margin="0.6rem 3rem 0.6rem 0rem">
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
      <BiggerContainerGilette>
      <ProjectContainer alignItems="flex-end" flexDirection="column">
        <BCGOne />
        <BCGTwo margin="40px 0px 40px 430px">
          <BGTitle textcolor="#fff">
            User persona
          </BGTitle>
        </BCGTwo>
        <InsideBiggerContainerGilette>
          <BCGOne flexDirection="column">
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
          </BCGOne>
          <BCGTwo margin="0">
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
          </BCGTwo>
        </InsideBiggerContainerGilette>
        </ProjectContainer>
      </BiggerContainerGilette>
      <SmallerContainerGilette alignItems="flex-end">
        <SCGOne margin="6.7rem 3rem 16.25rem 8rem">
          <BGHead width="380px" mediaWidth="100%">
            <BGTitle textcolor="#1A316D">
              High fideity mockup
            </BGTitle>
            <BGHeadDescription2 textcolor="#1A316D">
              Becoming the best doesn’t happen overnight.
              <br /> There’s always room for improvement.
            </BGHeadDescription2>
          </BGHead>
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
