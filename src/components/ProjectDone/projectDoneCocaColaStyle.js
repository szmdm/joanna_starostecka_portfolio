import styled from "styled-components";
import { mediaSize } from "../../variables/Mixins";


export const ProjectContainerCola = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: black;

    @media screen and (max-width: ${mediaSize}) {
        flex-direction: column;
    }

`;

export const ImageContainerCola = styled.div`
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

export const FirstContainerCola = styled.div`
  display: flex;
  position: absolute;
  max-width: 1280px;
  height: 100%;
  align-items: ${(props) => props.alignItems};
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection};

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FCCTitle = styled.span`
    margin-top: 200px;
    text-align: center;
    height: auto;
    text-transform: uppercase;
    font-size: clamp(1rem, 4vw, 4rem);
    line-height: clamp(1.2rem, 4vw, 4.8rem);
    font-family: futura-pt, sans-serif;
    font-weight: 700;
    color: #fff;

    @media screen and (max-width: ${mediaSize}) {
        margin-top: 30px;
    }
`;

export const FCCContentBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1220px;
    height: auto;
    margin: 20px 20px 70px 20px;

    p {
        color: #fff;
        text-align: center;
        font-size: clamp(0.75rem, 1.25vw, 1rem);
        position: relative;
        bottom: 20px;

    }

    @media screen and (max-width: ${mediaSize}) {
        margin: 0px 10px 0px 10px; 
    }
`;

export const SecondContainerCola = styled.div`
  display: flex;
  max-width: 1280px;
  height: 100%;
  align-items: ${(props) => props.alignItems};
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection};

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
    align-items: center;
  }

  p {
        color: #fff;
        text-align: center;
        font-size: clamp(0.75rem, 1.25vw, 1rem);
        position: relative;
        bottom: 20px;

        @media screen and (max-width: ${mediaSize}) {
            bottom: 5px;
        }
    }
`;

export const SCCContentBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1220px;
    height: auto;
    margin: 20px 20px 30px 20px;

    p {
        color: #fff;
        text-align: center;
        font-size: clamp(1.5rem,5vw,60px);
        position: relative;
        bottom: 60px;
        font-family: futura-pt, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-transform: uppercase; 
        
        @media screen and (max-width: ${mediaSize}) {
            bottom: 25px;
        }

    }
    
    img {
     position: relative;
     width: 100%;
     height: auto;
     object-fit: cover;
    }

    @media screen and (max-width: ${mediaSize}) {
        margin: 0px 10px 0px 10px; 
    }
`;

