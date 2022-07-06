import styled from "styled-components"
import { mediaSize } from "../../variables/Mixins";

export const PackshotItemOne = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
`

export const ItemOneViewBox = styled.div`
    width: auto;
    height: auto;

    img {
        max-width: 214px;
        height: auto;
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
    margin: 20px 0 0 20px;

`

export const ItemOneContentTitle = styled.h1`
    font-family: "FuturaStd-Book";
    font-size: 1.875rem; 
    font-size: clamp(1rem, 1.875rem, 2rem);
    text-transform: capitalize;
    line-height: 2.25rem;
    margin: 0px 0 25px 0;
`

export const ItemOneContentText = styled.text`
    font-family: "FuturaStd-Light";
    font-size: 1rem; 
    font-size: clamp(0.8rem, 1rem, 1.2rem);
    line-height: 1.125rem;

    div {
        font-family: "FuturaStd-Light";
        font-size: 1rem; 
        font-size: clamp(0.8rem, 1rem, 1.2rem);
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
`

export const ItemOnePages = styled.div`
    height: auto;
    margin: 5px 0 25px 0;
    white-space: pre;
`

export const ItemOneShopButtons = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 30px;
    
`

export const ItemOneButton = styled.div`
    text-align: center;
    border: 2px solid ${(props) => props.borderColor};
    padding: 3px 10px;
`