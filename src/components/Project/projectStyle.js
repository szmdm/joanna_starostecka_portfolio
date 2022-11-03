import styled from 'styled-components';
import { mediaSize } from '../../variables/Mixins';
import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';

export const ProjectContainer = styled.div`
    
    height: 100vh;
    

    h1 {
        font-family: "Arboria";
        font-weight: 700;
        text-align: left;
        margin: 25px 0 10px 100px;
        font-size: clamp(1.5rem,2rem,3vw);
        text-align: center;

        @media screen and (max-width: ${mediaSize}) {
        margin: 15px 0 10px 15px;
        transition: 0.2s ease-in;
        width: auto;
    }
    }

    @media screen and (max-width: ${mediaSize}) {
        height: auto;
    }
`
export const ImgContainer = styled.div`
    height: calc(100vh - 200px);
    width: 100%;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: left;
    padding: 0 1rem;
    object-fit: contain;

    @media screen and (max-width: ${mediaSize}) {
        height: calc(60vh - 200px);
    }
`
export const InfoContainer = styled.div`
    height: 200px;
    width: auto;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: center;
    flex-direction: column;
    color: #3E4136;

    @media screen and (max-width: ${mediaSize}) {
        height: auto;
    }
`

export const ProjectButton = styled(Link)`
    display: flex;
    font-size: clamp(0.7rem,1.2rem,3vw);
    border: none;
    color: #3E4136;
    background-color: white;
    margin: 0 0 20px 100px;
    text-decoration: none;
    font-family: "Arboria";
    font-weight: 400;
    font-style: book;


    &:hover {
        color: #269FF6;
        transition: ease-in;
        cursor: pointer;
    }


    @media screen and (max-width: ${mediaSize}) {
        margin-left: 15px;
        transition: 0.2s ease-in;
        width: auto;
    }
`

const move = keyframes` 
    from { 
        transform: translateX(0px);
    }
     to { 
        transform: translateX(10px);
     } 

`

export const ArrowIcon = styled.div`
    display: block;
    width: 25px;
    height: 25px;
    background-image: url(${(props) => props.img});
    position: relative;
    bottom: 3px;
    left: 10px;
    /* animation: ${move} 2s cubic-bezier(0, 0, 0.2, 1) infinite; */
    

    &:hover {
        background-image: url(${(props) => props.img_hover});
    }

`