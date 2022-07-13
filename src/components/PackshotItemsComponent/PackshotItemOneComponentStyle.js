import styled from "styled-components"
import { mediaSize } from "../../variables/Mixins";

export const PackshotItemOne = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    ${(props) => props.display};
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
`

export const ItemOneViewBox = styled.div`
    width: auto;
    height: auto;
    margin: 5px;

    img {
        max-width: 214px;
        height: auto;
    }

    @media screen and (max-width: ${mediaSize}) {
        margin: 15px 0 0 0;
    }
`
export const ItemOneContentBox = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 20px 10px 0 10px;
     flex-basis: 400px;

`

export const ItemOneContentTitle = styled.text`
    font-family: "FuturaStd-Light";
    font-size: 1.875rem; 
    font-size: clamp(1rem, 1.875rem, 2rem);
    text-transform: capitalize;
    line-height: 2.25rem;
    margin: 0px 0 25px 0;
`

export const ItemOneContentText = styled.text`
    font-family: "FuturaStd-Light";
    font-size: 1rem; 
    font-size: clamp(0.7rem, 1rem, 4vw);
    line-height: 1.125rem;

    div {
        font-family: "FuturaStd-Light";
        font-size: 1rem; 
        font-size: clamp(0.7rem, 1rem, 1.2rem);
        line-height: 1.125rem; 
        margin: 20px 0 25px 0;
        text-decoration-line: underline;
        text-decoration-thickness: 18%;
        text-underline-offset: 1.5px;
    }

`

export const ItemOneRank = styled.div`
    width: 73px;
    height: auto;
    margin: 5px 0 25px 0;

    @media screen and (max-width: ${mediaSize}) {
        margin: 5px 0 10px 0;
    }
`

export const ItemOnePages = styled.div`
    height: auto;
    margin: 5px 0 25px 0;
    white-space: pre;
    font-family: "FuturaStd-Book";
    font-size: clamp(0.6rem, 0.8rem, 2vw);

    @media screen and (max-width: ${mediaSize}) {
        margin: 5px 0 15px 0;
    }
`

export const ItemOneShopButtons = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 30px 0 10px;
    
`

export const ItemOneButton = styled.div`
    text-align: center;
    border: 2px solid ${(props) => props.borderColor};
    padding: 3px 10px;
    font-size: clamp(0.6rem, 0.8rem, 2vw);
`