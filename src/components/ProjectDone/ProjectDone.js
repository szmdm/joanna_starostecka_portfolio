import React from "react";
import {
  BiggerContainerGilette,
  BCGOne,
  BCGTwo,
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
} from "./projectDoneStyle";
import BCGOne_1 from "../../assets/projectsDone/pDGillette/IPad_01-1.png";
import BCGTwo_1 from "../../assets/projectsDone/pDGillette/Gillette_logo_02-1.png";
import SCGImg_1 from "../../assets/projectsDone/pDGillette/Fusion_Logo-1.png";
import SCGImg_2 from "../../assets/projectsDone/pDGillette/Icons-1.png";
import SCGImg_3 from "../../assets/projectsDone/pDGillette/gillette_image_02.png";
import SCGImg_4 from "../../assets/projectsDone/pDGillette/font_01.png";
import SCGImg_5 from "../../assets/projectsDone/pDGillette/font_02.png";
import BCGImg_1 from "../../assets/projectsDone/pDGillette/Image_03.png";


const ProjectDoneGilette = () => {
  return (
    <>
      <BiggerContainerGilette>
        <BCGOne>
          <div className="BCGOneContainer">
            <img src={BCGOne_1} alt="content presented on tablet" />
          </div>
        </BCGOne>
        <BCGTwo>
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
      </BiggerContainerGilette>
      <SmallerContainerGilette alignItems="center">
        <SCGOne>
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
      </SmallerContainerGilette>
      <BiggerContainerGilette>
        <BCGOne>
          <div className="BCGOneContainer">
            <img src={BCGImg_1} alt="young couple on a smartphone screen" />
          </div>
        </BCGOne>
        <BCGTwo>
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
      </BiggerContainerGilette>
      <SmallerContainerGilette alignItems="flex-end">
        <SCGOne>
          <BGHead width="380px" mediaWidth="100%">
            <BGTitle textcolor="#1A316D">
              Typography
            </BGTitle>
            <BGHeadDescription2 textcolor="#1A316D">
              Becoming the best doesn’t happen overnight.
              <br /> There’s always room for improvement.
            </BGHeadDescription2>
          </BGHead>
          <BGContent>
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
          <BGContent>
            <SCGImg>
              <img src={SCGImg_5} alt="" height="175px" width="248px" />
            </SCGImg >
            <BGHeadDescription3 textcolor="#1A316D" position="absolute" fontWeight="lighter">
            Futura STD Bold
              <br /> Aa Bb Cc
            </BGHeadDescription3>
          </BGContent>
        </SCGThree>
      </SmallerContainerGilette>
      <BiggerContainerGilette>
        <BCGOne>
          <div className="BCGOneContainer">
            <img src={BCGImg_1} alt="young couple on a smartphone screen" />
          </div>
        </BCGOne>
        <BCGTwo>
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
      </BiggerContainerGilette>
    </>
  );
};

export default ProjectDoneGilette;
