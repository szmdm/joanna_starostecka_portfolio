import styled from "styled-components";
import { laptop, mediaSize, ceramicBasis } from "../../variables/Mixins";

export const PCCLeft = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-basis: 634px;
height: 100%;
flex-wrap: wrap;
gap: 60px;
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
}

@media screen and (max-width: ${ceramicBasis}) {
    border-right: none;
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