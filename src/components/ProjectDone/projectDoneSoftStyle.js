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
    max-width: 600px;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 120px;
    gap: 70px;
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