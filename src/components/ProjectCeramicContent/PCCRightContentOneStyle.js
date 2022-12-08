import styled from "styled-components";
import { mediaSize, ceramicBasis } from "../../variables/Mixins";


export const PCCRight = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 634px;
    height: 100%;
    flex-wrap: wrap;
    gap: 60px;
    background-image: url(${(props) => props.imgPCCRight});
    background-size: cover;
    /* background-position: center; */

    &::after {
        content: "";
        border-bottom: 1px solid #D19886;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 91%;
    }

    @media screen and (max-width: ${mediaSize}) {
        flex-direction: column;
    }
    @media screen and (max-width: ${ceramicBasis}) {
        height: 315px;
    }
`;