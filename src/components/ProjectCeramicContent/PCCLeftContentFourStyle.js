import styled from "styled-components";
import { laptop, mediaSize, ceramicBasis } from "../../variables/Mixins";

export const PCCLeft = styled.div`
position: relative;
display: flex;
justify-content: flex-start;
align-items: center;
flex-basis: 634px;
height: 100%;
width: 100%;
flex-wrap: wrap;
background-color: ${(props) => props.backgroundColor};
border-right: ${(props) => props.borderRight};
align-content: center;
padding: 15px 15px 15px 15px;


&::after {
        content: "";
        border-bottom: 1px solid #D19886;
        position: absolute;
        bottom: 0;
        right: 0;
        height: 100%;
        width: 91%;
        ${(props) => props.borderBottomDirection};
    }

@media screen and (max-width: ${mediaSize}) {
    border-right: none;
    gap: 15px;
}

@media screen and (max-width: ${ceramicBasis}) {
    border-right: none;
    height: auto;
}
`;