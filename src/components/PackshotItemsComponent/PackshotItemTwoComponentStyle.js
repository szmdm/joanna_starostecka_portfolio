import styled from "styled-components"
import { mediaSize } from "../../variables/Mixins";

export const PackshotItemTwo = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
`

export const PackshotItemTwoContent = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;


    .shades {
        top: 230px;
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
export const PackshotItemTwoText = styled.div`
    bottom: 225px;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;
    position: absolute;

    .number {
        font-family: "FuturaStd-Light";
        font-size: 9.375rem;
        font-size: clamp(3rem, 9.375rem, 9.375rem);
        margin-bottom: 10px;
    }

    .under-number {
        font-family: "FuturaStd-Light";
        font-size: 1.875rem;
        font-size: clamp(1rem, 1.875rem, 2.5rem);
        top: 175px;
    }

    @media screen and (max-width: ${mediaSize}) {
            position: static;
            margin-bottom: 25px;
        }
`

export const PackshotItemTwoImages = styled.div`

    @media screen and (max-width: ${mediaSize}) {
            position: static;
            margin-bottom: 25px;
        }
`

export const PackshotItemTwoImage = styled.div`
        height: auto;
        position: relative;
            
        .PDSoftImg_10 {
            height: auto;
        }

        .PDSoftImg_11 {
            position: absolute;
            right: 280px;
            top: 30px;  
        }

        .PDSoftImg_12 {
            position: absolute;
            left: 305px;
            top: 60px;
        }

        .PDSoftImg_13 {
            position: absolute;
            left: 285px;
            top: 350px;
        }

        @media screen and (max-width: ${mediaSize}) {
            .PDSoftImg_13, .PDSoftImg_12 {
                display: none;
        }
            .PDSoftImg_11 {
                width: 90%;
                right: 20px;
                top: -20px;

            }
            .PDSoftImg_10 {
                width: 100%;

        }
        }
`