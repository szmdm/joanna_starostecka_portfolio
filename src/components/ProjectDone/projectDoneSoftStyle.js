import styled from "styled-components"
import { mediaSize } from "../../variables/Mixins";

export const ProjectContainerSoft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    background: black;

    @media screen and (max-width: ${mediaSize}) {
        flex-direction: column;
    }

`;

export const FirstImageContainerSoft = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    max-height: 1500px;
    width: 100%;

    img {
     position: relative;
     width: 100%;
     height: auto;
     object-fit: cover;
    }
`;

export const FirstContainerSoft = styled.div`
  display: flex;
  position: absolute;
  max-width: 1280px;
  align-items: ${(props) => props.alignItems};
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection};

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FirstCSoftTitle = styled.span`
    position: relative;
    top: -45px;
    margin-top: 0px;
    text-align: center;
    max-width: 172px;
    height: auto;

    @media screen and (max-width: ${mediaSize}) {
    }
`;

export const FirstCSoftContentBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 310px;
    height: auto;
    margin: 134px 20px 0px 20px;

    p {
        color: #fff;
        text-align: center;
        font-size: clamp(0.75rem, 1.25vw, 1rem);
        position: relative;
        bottom: 20px;

    }

    @media screen and (max-width: ${mediaSize}) {
        margin: 25px 10px 0px 10px; 
    }
`;