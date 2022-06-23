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
        margin-top: 40px;
    }
`;

export const FCCContentBox = styled.div`
    display: flex;
    max-width: 1220px;
    height: auto;
    margin: 20px 20px 70px 20px;

    @media screen and (max-width: ${mediaSize}) {
        margin: 10px 10px 0px 10px; 
    }
`

