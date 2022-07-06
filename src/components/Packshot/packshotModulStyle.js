import styled from "styled-components"
import { mediaSize } from "../../variables/Mixins";

export const PackshotModul = styled.div`
position: absolute;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-wrap: wrap;
width: 100%;
max-height: 670px;
overflow: auto;

@media screen and (max-width: ${mediaSize}) {
}
`;

export const Packshot = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
max-width: 182px;
height: auto;
margin-top: 5px;

    img {

        @media screen and (max-width: ${mediaSize}) {
            width: 100%;
            height: auto;
        }
    }


@media screen and (max-width: ${mediaSize}) {
    flex-direction: column;
}

`;

export const PackshotButton = styled.div`
height: 20px;
width: 20px;
border-radius: 100%;
background-color: black;
position: relative;
bottom: 50px;
left: 20px;

`