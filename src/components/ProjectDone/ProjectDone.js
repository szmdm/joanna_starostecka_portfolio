import React from "react";
import {
  BiggerContainerGilette,
  BCGOne,
  BCGTwo,
  SmallerContainerGilette,
  SCGOne,
  SCGTwo,
  BGHead,
  BGHeadDescription1,
  BGHeadDescription2,
  BGTitle,
  BGContent,
} from "./projectDoneStyle";
import BCGOne_1 from "../../assets/projectsDone/pDGillette/IPad_01-1.png";
import BCGTwo_1 from "../../assets/projectsDone/pDGillette/Gillette_logo_02-1.png";

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
          <BGHead>
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
      <SmallerContainerGilette>
        <SCGOne>
            <BGTitle textcolor="#1A316D">
              Campain gap
            </BGTitle>
            <BGHeadDescription2 textcolor="#1A316D">
              Becoming the best doesn’t happen overnight.
              <br /> There’s always room for improvement.
            </BGHeadDescription2>
        </SCGOne>
        <SCGTwo>

        </SCGTwo>
      </SmallerContainerGilette>
    </>
  );
};

export default ProjectDoneGilette;
