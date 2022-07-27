import styled from "styled-components";
import { laptop, mediaSize, ceramicBasis } from "../../variables/Mixins";

export const ProjectCeramicContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 630px;
    width: 100%;
    flex: 1;
    flex-wrap: wrap;

    @media screen and (max-width: ${mediaSize}) {
        
    }
`;
