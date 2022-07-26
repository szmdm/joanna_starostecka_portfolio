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
    position: initial;
    max-height: 450px;
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
`;

export const PackshotButtonClickable = styled.div`
height: 20px;
width: 20px;
border-radius: 100%;
background-color: black;
position: relative;
bottom: 50px;
left: 20px;

    ::before {
        content: '';
        height: 30px;
        width: 30px;
        border-radius: 100%;
        background-color: rgba(255, 255, 255, 0);
        position: absolute;
        bottom: -6px;
        left: -6px;
        border: 1px solid black;
        z-index: 10;
        cursor: pointer;
    }

&:hover {
    background-color: rgba(230,230,230, 5);
    transition: background-color ease-in-out .2s;
    /* border: 1px solid black; */
    }
`;