import styled from "styled-components";
import { laptop, mediaSize, ceramicBasis } from "../../variables/Mixins";
// import PDCeramicImg_01 from "../../assets/projectsDone/pDCeramicStudio/Image_001.png"

export const ProjectCeramicContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 660px;
    width: 100%;
    flex: 1;
    flex-wrap: wrap;

    @media screen and (max-width: ${mediaSize}) {
    }
`;

export const PCCLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 634px;
    height: 100%;
    flex-wrap: wrap;
    gap: 60px;
    border-bottom: 2px solid #D19886;
    border-right: 2px solid #D19886;
    background-image: url(${(props) => props.imgPCCRight});
    background-size: cover;

    img {
     position: relative;
     width: 100%;
     height: auto;
     object-fit: cover;
    }

    @media screen and (max-width: ${mediaSize}) {
        border-right: none;
    }

    @media screen and (max-width: ${ceramicBasis}) {
        border-right: none;
    }
`;

export const PCCRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 634px;
    height: 100%;
    flex-wrap: wrap;
    gap: 60px;
    border-bottom: 2px solid #D19886;
    background-image: url(${(props) => props.imgPCCRight});
    background-size: cover;

    @media screen and (max-width: ${mediaSize}) {
        flex-direction: column;
    }
`;

export const PCCLeftOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-basis: 225px;

        h1 {
            font-family: "FuturaStd-Light";
            font-size: 9.375rem;
            font-size: clamp(3rem, 5.625rem, 9.375rem);
        }

        p {
            font-family: "FuturaStd-Light";
            font-size: 1.875rem;
            font-size: clamp(1rem, 2.3rem, 2.5rem);
        }
`;

export const PCCLeftTwo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-basis: 225px;

    h1 {
            font-family: "FuturaStd-Light";
            font-size: 9.375rem;
            font-size: clamp(3rem, 5.625rem, 9.375rem);
        }

        p {
            font-family: "FuturaStd-Light";
            font-size: 1.875rem;
            font-size: clamp(1rem, 2.3rem, 2.5rem);
        }
`;

export const PCCRightOne = styled.div`
    display: flex;
    justify-content: center;
`;

export const PCCRightTwo = styled.div`
    display: flex;
    justify-content: center;
`;