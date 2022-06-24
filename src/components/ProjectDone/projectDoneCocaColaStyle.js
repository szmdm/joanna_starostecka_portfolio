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
  width: 100%;
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
    height: auto;
    margin: 20px 20px 30px 20px;

    h1 {
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

export const ThirdContainerCola = styled.div`
  display: flex;
  max-width: 1280px;
  width: 100%;
  height: 100%;
  align-items: ${(props) => props.alignItems};
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection};

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ThirdContentContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 20px;
    width: 100%;
    height: auto;
    background-color: #C1001D;
`

export const TCCTitle = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    margin-bottom: 95px;

    h1 {
        color: black;
        text-align: center;
        font-size: clamp(1.5rem,5vw,60px);
        font-family: "TCCC-UnityHeadline-Bold";
        font-style: normal;
        font-weight: bold;
        text-transform: uppercase; 
        margin: 88px 0 58px 0;
        
        @media screen and (max-width: ${mediaSize}) {

        }
    }

    p {
        color: black;
        text-align: center;
        font-size: clamp(0.75rem, 1.25vw, 1rem);
        bottom: 20px;

    }
`;

export const TCCFonts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
`;

export const TCCFontsBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    min-width: 350px;
    flex-grow: 1;
    margin-bottom: 160px;

        span {
            font-family: "TCCC-UnityHeadline-Regular";
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1.2rem;
            text-align: center;
            text-transform: lowercase;
            margin-bottom: 25px;
            color: black;
        };

        p1 {
            color: black;
            text-align: center;
            font-size: clamp(1.5rem,5vw,60px);
            font-family: "TCCC-UnityHeadline-Bold";
            font-style: normal;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 50px;
        };

        p2 {
            color: black;
            text-align: center;
            font-size: clamp(1rem,5vw,25px);
            font-family: "TCCC-UnityHeadline-Bold";
            font-style: normal;
            font-weight: bold;
            text-transform: lowercase;
        }

    @media screen and (max-width: ${mediaSize}) {
        margin-bottom: 80px;
        min-width: auto;
    }
    
`;

export const TCCFontsBox2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 50%;

`;

export const FourthContainerCola = styled.div`
    display: flex;
    max-width: 1280px;
    width: 100%;
    height: 100%;
    align-items: ${(props) => props.alignItems};
    justify-content: space-between;
    flex-direction: ${(props) => props.flexDirection};

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FourthCCTitle = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    margin-bottom: 95px;
    background-color: black;

    h1 {
        color: #fff;
        text-align: center;
        font-size: clamp(1.5rem,5vw,60px);
        font-family: "TCCC-UnityHeadline-Bold";
        font-style: normal;
        font-weight: bold;
        text-transform: uppercase; 
        margin: 88px 0 342px 0;
    }
`;

export const FourthCCBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;

    img {
     position: relative;
     width: 80%;
     height: auto;
     object-fit: cover;
     bottom: 200px;
    }
`;