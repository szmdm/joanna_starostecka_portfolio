import styled from "styled-components";
import { mediaSize, ceramicBasis } from "../../variables/Mixins";

export const PCCLeft = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: flex-end;
flex-basis: 635px;
height: 100%;
flex-wrap: wrap;
gap: 75px;
background-color: ${(props) => props.backgroundColor};
background-image: url(${(props) => props.imgPCCLeft});
background-size: cover;


&::after {
        content: "";
        border-bottom: 1px solid #D19886;
        border-right: 1px solid #D19886;
        position: absolute;
        bottom: 0;
        right: 0;
        height: 100%;
        width: 91%;
        /* width: 8px; */
    }

@media screen and (max-width: ${mediaSize}) {
    border-right: none;
    gap: 0px;
    justify-content: left;
}

@media screen and (max-width: ${ceramicBasis}) {
    border-right: none;
    height: auto;
}
`;

export const PCCLeftOne = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-basis: 211px;
    margin: 0 0px 50px 0px;

        .menu {
            height: 27px;
            width: 25px;
            position: relative;
            display: flex;
            flex-direction: column;
            margin-bottom: 60px;
            margin-top: 30px;

            span {
                height: 9px;
                width: 25px;
                border-bottom: 2px solid #E2E2D8;
            }
        }

        img {
            position: relative;
            left: 0;
            margin-bottom: 20px;
        }

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
        margin-left: 45px;

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

export const PCCLeftTwo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-basis: 211px;
    margin: 0 0px 50px 0px;

    h1 {
            font-family: minion-pro, serif;
            font-style: normal;
            font-weight: 400;
            font-size: 2.5rem;
            font-size: clamp(2rem, 2.5rem, 3vw);
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

@media screen and (max-width: ${mediaSize}) {
    display: none;
}
`;