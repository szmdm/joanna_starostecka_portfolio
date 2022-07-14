import styled from "styled-components"
import { mediaSize } from "../../variables/Mixins";

export const ProjectContainerSoft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

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
    margin: 0 105px 0 105px;
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
        top: -20px;
    }
`;

export const FirstCSoftContentBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 310px;
    height: auto;
    margin: 134px 20px 0px 20px;

    @media screen and (max-width: ${mediaSize}) {
        margin: 5px 10px 0px 10px;
        max-width: 180px; 
    }
`;

export const SecondContainerSoft = styled.div`
  display: flex;
  max-width: 1280px;
  min-height: 670px;
  align-items: ${(props) => props.alignItems};
  justify-content: center;
  flex-direction: ${(props) => props.flexDirection};
  
    span {
        position:relative;
        bottom: -300px;
    }

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ThirdContainerSoft = styled.div`
    display: flex;
    justify-content: center;
    max-height: 693px;
    width: 100%;

    img {
     width: 100%;
     height: auto;
     object-fit: cover;
    }
`;
export const ThirdCSoftContent = styled.div`
    position: absolute; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ThirdCSoftText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "FuturaStd-Light";
    font-size: 1.875rem; 
    font-size: clamp(1rem, 1.875rem, 2rem);
    text-transform: capitalize;
    line-height: 2.25rem;
    margin: 0px 0 25px 0;

      .number {
          font-family: "FuturaStd-Light";
          font-size: 9.375rem;
          font-size: clamp(3rem, 9.375rem, 9.375rem);
          margin-bottom: 10px;
      }

      .under-number {
          font-family: "FuturaStd-Light";
          font-size: 1.875rem;
          font-size: clamp(1rem, 1.875rem, 2.5rem);
          top: 1px;
          text-align: center;
      }
`;


