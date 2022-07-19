import styled from "styled-components"
import { laptop, mediaSize } from "../../variables/Mixins";

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

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 2.25rem;
    margin: 30px 0 25px 0;
    position: relative;
    top: -65px;

      .number {
          font-family: "FuturaStd-Light";
          font-size: 9.375rem;
          font-size: clamp(3rem, 5.625rem, 9.375rem);
      }

      .under-number {
          font-family: "FuturaStd-Light";
          font-size: 1.875rem;
          font-size: clamp(1rem, 2.3rem, 2.5rem);
          top: 1px;
          text-align: center;
          position: relative;
          top: 50px;
      }

      @media screen and (max-width: ${mediaSize}) {
        top: -70px;

        .number {
            font-size: 73px;
            margin-bottom: 0px;
            margin-left: 0;
            letter-spacing: 0;
        }
        .under-number {
            font-size: 20px;
            line-height: 22px;
            top: 30px;
            margin-left: 0;
        }
    }

    @media screen and (min-width: ${mediaSize}) and (max-width: ${laptop}) {
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
  margin-bottom: 1px;
  
    span {
        position:relative;
        bottom: -300px;
    }

  @media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
    align-items: center;
    min-height: 450px;
  }
`;

export const ThirdContainerSoft = styled.div`
    display: flex;
    justify-content: center;
    max-height: 693px;
    width: 100%;
    position: relative;

    img {
     width: 100%;
     height: auto;
     object-fit: cover;
    }
    
    .footerText {
        position: absolute;
        bottom: 5px;
        font-family: "FuturaStd-Light";
        font-size: 1rem; 
        font-size: clamp(0.7rem, 1rem, 1.2rem);
        line-height: 1.125rem; 
        margin: 20px 0 25px 0;
        text-decoration-line: underline;
        text-decoration-thickness: 18%;
        text-underline-offset: 1.5px;
        margin-left: 25px;
    }

    @media screen and (max-width: ${mediaSize}) {

        .footerText {
            display: none;
            margin-left: 0;
        }
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
    line-height: 2.25rem;
    margin: 30px 0 25px 0;
    position: relative;
    top: 325px;

      .number {
          font-family: "FuturaStd-Light";
          font-size: 9.375rem;
          font-size: clamp(3rem, 9.375rem, 9.375rem);
          margin-bottom: 10px;
          letter-spacing: -25px;
      }

      .under-number {
          font-family: "FuturaStd-Light";
          font-size: 1.875rem;
          font-size: clamp(1rem, 1.875rem, 2.5rem);
          top: 1px;
          text-align: center;
          margin-left: 25px;
          position: relative;
          top: 50px;
      }

      @media screen and (max-width: ${mediaSize}) {
        position: initial;

        .number {
            font-size: 80px;
            margin-bottom: 0px;
            margin-left: 0;
            letter-spacing: 0;
        }
        .under-number {
            font-size: 20px;
            line-height: 22px;
            top: 30px;
            margin-left: 0;
        }
    }

    @media screen and (min-width: ${mediaSize}) and (max-width: ${laptop}) {
            top: 160px;
    }
`;

export const FourthContainerSoft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 572px;
    width: 100%;
    position: relative;
    flex-direction: column;

    @media screen and (max-width: ${mediaSize}) {
        max-height: none;
    }
`

export const FouthTitleBox = styled.div`
    text-align: center;
    margin: 85px 0 20px 0;
    font-family: "FuturaStd-Light";
    font-size: 1.875rem;
    font-size: clamp(1rem, 1.875rem, 2.5rem);

`

export const FourthContentContainer = styled.div`
    display: flex;
    flex-grow: 1;
    max-width: 900px;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 120px;
    gap: 70px;
    flex-wrap: wrap;
`

export const FCCLeft = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
`

export const FCCRight = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
`

export const FCCTitle = styled.div`
    text-align: center;
    margin: 50px 0 30px 0;
    font-family: "FuturaStd-Book";
    font-size: 1rem;
    font-size: clamp(0.7rem, 1rem, 1.5rem);
`

export const FCCColors = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
`

export const FCCLeftColors = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        margin: 0px 0 20px 0;
    }
    span {
        text-align: center;
        font-family: "FuturaStd-Light";
        font-size: 1rem;
        font-size: clamp(0.7rem, 1rem, 1.5rem);
    }
`
export const FCCFonts = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin: 48px 0 101px 0;
    flex-wrap: wrap;

    @media screen and (max-width: ${mediaSize}) {
        margin: 0px 0 25px 0;
        gap: 35px;
    }
`
export const FCCRightFonts = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    min-width: 120px;
    margin: 0px 20px 0px 20px;

    .big {
        font-family: ${(props) => props.fontFamily};
        font-size: 1.875rem;
        font-size: clamp(1rem, 1.875rem, 2.5rem);
    }
    span {
        font-family: ${(props) => props.fontFamily};
        font-size: 1rem;
        font-size: clamp(0.7rem, 1rem, 1.5rem);
    }
`

export const FifthContainerSoft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;

        img {
        width: 100%;
        height: auto;
        object-fit: cover;
        }
`

export const FifthCSoftContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    position: absolute;
    flex-direction: column;
    max-width: 355px;
    padding: 10px;
    text-align: center;

    .user {
        font-family: "FuturaStd-Light";
        font-size: 1.875rem;
        font-size: clamp(1rem, 1.875rem, 2vw);
        margin-bottom: 30px;
    }
    span {
        font-family: "FuturaStd-Light";
        font-size: 1rem;
        font-size: clamp(0.7rem, 1rem, 2vw);
    }

`
export const SixthContainerSoft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    margin: 80px 0 130px 0;

    @media screen and (max-width: ${mediaSize}) {
        max-height: none;
    }
`

export const SixthCSoftTitle = styled.div`
    font-family: "FuturaStd-Light";
    font-size: 1.875rem;
    font-size: clamp(1rem, 1.875rem, 2vw);
    margin-bottom: 30px;
`
export const SixthCContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    flex-wrap: wrap;
    margin: 50px 0 80px 0;
    max-width: 940px;
    gap: 25px;
`
export const SCCLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`
export const SCCTitle = styled.div`
    font-family: "FuturaStd-Light";
    font-size: 1rem;
    font-size: clamp(0.7rem, 1rem, 2vw);
`
export const SCCLeftContent = styled.div`
    display: flex;
    flex-direction: row;
    margin: 65px 0 130px 0;
    gap: 15px;
    flex-wrap: wrap;
    flex: 1;

    .leftBox {
        font-family: "FuturaStd-Book";
        font-size: 1rem;
        font-size: clamp(0.6rem, 0.9rem, 2vw); 
        padding: 0.5px 10px;
    }

    .addCart {
        border: 2px solid black;
    }
    .buyNow {
        border: 2px solid black;
    }
    .seeAll {
        text-decoration-line: underline;
        text-decoration-thickness: 18%;
        text-underline-offset: 4px;
    }

    @media screen and (max-width: ${mediaSize}) {
        margin: 20px 0 10px 0;
    }
`
export const SCCLeftFooter = styled.div`
    height: auto;
    margin: 5px 0 25px 0;
    white-space: pre;
    font-family: "FuturaStd-Book";
    font-size: clamp(0.6rem, 0.8rem, 2vw);

    span {
        font-weight: bold;
    }

    @media screen and (max-width: ${mediaSize}) {
        margin: 5px 0 15px 0;
    }
`
export const SCCRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const SCCRightTitle = styled.div`
    font-family: "FuturaStd-Light";
    font-size: 1rem;
    font-size: clamp(0.7rem, 1rem, 2vw);
`

export const SCCRightContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 59px 0 40px 0;
    flex: 1;
    flex-wrap: wrap;
    max-width: 470px;
    gap: 15px;

`
export const FormButton = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-family: "FuturaStd-Light";
    font-size: 1rem;
    font-size: clamp(0.5rem, 0.75rem, 2vw); 
    padding: 0.5px 10px;
    border: ${(props) => props.border};
    width: 224px;
    height: 41px;

    span {
        white-space: pre;
    }

    @media screen and (max-width:${mediaSize}) {
        display: ${(props) => props.display};
    }
`
export const SCCRightFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

        .sccRightTitle {
            font-family: "FuturaStd-Light";
            font-size: 1rem;
            font-size: clamp(0.7rem, 1rem, 2vw);
            margin-bottom: 15px;
        }

        .sccRightIcons {
            display: flex;
            gap: 5px;
        }

`
export const SixthCSubtitle = styled.div`
    font-family: "FuturaStd-Light";
    font-size: 1rem;
    font-size: clamp(0.7rem, 1rem, 2vw);
`