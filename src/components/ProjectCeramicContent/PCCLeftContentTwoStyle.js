import styled from "styled-components";
import { mediaSize, ceramicBasis } from "../../variables/Mixins";

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
        border-right: ${(props) => props.borderRight};
        position: absolute;
        bottom: 0;
        right: 0;
        height: 100%;
        width: 91%;
        ${(props) => props.borderBottomDirection}
    }

@media screen and (max-width: ${mediaSize}) {
    border-right: none;
}

@media screen and (max-width: ${ceramicBasis}) {
    height: 315px;
    &::after {
        border-right: none;
    }
}
`;

export const PCCLeftTwoInside = styled.div`
background-image: url(${(props) => props.imgPCCLeft});
width: ${(props) => props.width};
height: ${(props) => props.height};
background-size: cover;
background-position: center;

@media screen and (max-width: ${mediaSize}) {
    /* height: auto; */
}
`