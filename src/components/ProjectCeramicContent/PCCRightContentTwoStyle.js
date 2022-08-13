import styled from "styled-components";
import { laptop, mediaSize, ceramicBasis } from "../../variables/Mixins";

export const PCCRight = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: flex-end;
flex-basis: 634px;
height: 100%;
flex-wrap: wrap;
gap: 75px;
background-color: ${(props) => props.backgroundColor};
background-image: url(${(props) => props.imgPCCLeft});
background-size: cover;


&::after {
        content: "";
        border-bottom: 1px solid #D19886;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 91%;
        /* width: 8px; */
    }

@media screen and (max-width: ${mediaSize}) {
    border-right: none;
    gap: 0px;
}

@media screen and (max-width: ${ceramicBasis}) {
    border-right: none;
    height: auto;
}
`;

export const PCCRightOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-basis: 211px;
    margin: 30px 0px 50px 0px;

        h1 {
            font-family: minion-pro, serif;
            font-style: normal;
            font-weight: 400;
            font-size: 2.5rem;
            text-transform: uppercase;
            color: #E2E2D8;
            margin-bottom: 20px;
        }

        p {
            font-family: "Calibri";
            font-weight: 400;
            font-size: 1.06rem;
            font-size: clamp(0.6rem, 0.94rem, 3vw);
            color: #E2E2D8;
        }

        .dots {
            display: none;
        }

        .restText {
            font-family: "Calibri";
            font-weight: 400;
            font-size: 0.94rem;
            color: #E2E2D8;
        }


    @media screen and (max-width: ${mediaSize}) {
        flex-basis: auto;

        .restText {
            display: none;
        }

        .dots {
            display: block;
        }
        
        h1 {
            width: 200px;
        }

        p {
            font-size: 0.94rem;
            padding: 0 20px 0 0;
        }
}
`;

export const PCCRightTwo = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-basis: 211px;
    margin: 30px 0px 125px 0px;

    img {
        margin: 30px 0 30px 0;
    }

    h1 {
            font-family: minion-pro, serif;
            font-style: normal;
            font-weight: 400;
            font-size: 2.5rem;
            font-size: clamp(2rem, 2.5rem, 3vw);
            text-transform: uppercase;
            color: #7E7367;
            margin-bottom: 20px;
        }

        p {
            font-family: "Calibri";
            font-weight: 400;
            font-size: 1.06rem;
            font-size: clamp(0.6rem, 0.94rem, 3vw);
            color: #7E7367;
        }

@media screen and (max-width: ${mediaSize}) {
    display: none;
}
`;