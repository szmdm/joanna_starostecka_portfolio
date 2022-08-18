import styled from "styled-components";
import { laptop, mediaSize, ceramicBasis, mobileLMediaSize } from "../../variables/Mixins";

export const PCCLeft = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: ${(props) => props.alignItems};
flex-basis: 634px;
height: 100%;
flex-wrap: wrap;
gap: 75px;
background-color: ${(props) => props.backgroundColor};
background-image: url(${(props) => props.imgPCCLeft});
background-size: cover;
border-right: ${(props) => props.borderRight};


&::after {
        content: "";
        border-bottom: 1px solid #D19886;
        position: absolute;
        bottom: 0;
        right: 0;
        height: 100%;
        width: 91%;
        ${(props) => props.borderBottomDirection}
    }

@media screen and (max-width: ${mediaSize}) {
    border-right: none;
    gap: 15px;
    justify-content: flex-start;
}

@media screen and (max-width: ${ceramicBasis}) {
    border-right: none;
    height: auto;
}


`;

export const PCCLeftOne = styled.div`
    display: flex;
    justify-content: ${(props) => props.PCCLeftOneJustify};
    align-items: flex-start;
    flex-direction: column;
    flex-basis: 211px;
    margin: ${(props) => props.margin};

        h1 {
            font-family: minion-pro, serif;
            font-style: normal;
            font-weight: 400;
            font-size: 2.5rem;
            /* font-size: clamp(2rem, 2.5rem, 3vw); */
            text-transform: uppercase;
            color: ${(props) => props.color};
            margin-bottom: 15px;
        }

        p {
            font-family: "Calibri";
            font-weight: 400;
            font-size: 0.94rem;
            /* font-size: clamp(0.6rem, 0.94rem, 3vw); */
            color: ${(props) => props.color};
        }

    @media screen and (max-width: ${mobileLMediaSize}) {
        margin: 55px 0px 10px 45px;

        h1 {
            margin-bottom: 25px;
        }
    }

    @media screen and (min-width: ${mediaSize}) and (max-width: ${ceramicBasis}) {
        margin: 55px 0px 50px 0px;

        h1 {
            margin-bottom: 25px;
        }
    }

    @media screen and (min-width: ${mobileLMediaSize}) and (max-width: ${mediaSize}) {
        justify-content: flex-start;
        margin: 55px 0px 0px 45px;
}
`;

export const PCCLeftTwo = styled.div`
    display: flex;
    justify-content: ${(props) => props.PCCLeftTwoJustify};
    align-items: ${(props) => props.alignItemsTwo};
    flex-direction: column;
    flex-basis: 211px;
    margin: ${(props) => props.margin};

    h1 {
            font-family: minion-pro, serif;
            font-style: normal;
            font-weight: 400;
            font-size: 2.5rem;
            /* font-size: clamp(2rem, 2.5rem, 3vw); */
            text-transform: uppercase;
            color: ${(props) => props.color};
            margin-bottom: 20px;
        }

        p {
            font-family: "Calibri";
            font-weight: 400;
            font-size: 0.94rem;
            /* font-size: clamp(0.6rem, 0.94rem, 3vw); */
            color: ${(props) => props.color};
        }

    @media screen and (max-width: ${mediaSize}) {
        margin: 0px 0px 55px 0px;
    }

    @media screen and (min-width: ${mediaSize}) and (max-width: ${ceramicBasis}) {
        margin: 125px 0px 50px 0px;

        h1 {
            margin-bottom: 25px;
        }
    }
    @media screen and (min-width: ${mobileLMediaSize}) and (max-width: ${mediaSize}) {
        margin: 125px 0px 50px 0px;

        h1 {
            margin-bottom: 25px;
        }
    }

    @media screen and (max-width: ${mobileLMediaSize}) {
        margin: 0px 0px 25px 45px;
    }
`;