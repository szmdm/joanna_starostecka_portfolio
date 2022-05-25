import styled from 'styled-components';
import { mediaSize } from './Mixins';
import { Link } from 'react-router-dom';

export const ProjectContainer = styled.div`
    
    height: 100vh;
    

    h1 {
        text-align: left;
        margin: 40px 0 10px 100px;
        font-size: clamp(3.5rem, 5vw, 3.5rem);
        text-align: center;

        @media screen and (max-width: ${mediaSize}) {
        margin: 40px 0 10px 15px;
        transition: 0.2s ease-in;
        width: auto;
    }
    }
`
export const ImgContainer = styled.div`
    height: calc(100vh - 200px);
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: left;
    padding: 0 1rem;
`
export const InfoContainer = styled.div`
    height: 200px;
    width: auto;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: center;
    flex-direction: column;

   
`

export const ProjectButton = styled(Link)`
    display: flex;
    font-size: 1.4rem;
    border: none;
    color: black;
    /* transition: 0.2s ease-in; */
    background-color: white;
    margin: 0 0 20px 100px;
    text-decoration: none;

    &:hover {
        color: gold;
        transition: ease-in;
        cursor: pointer;
    }

    @media screen and (max-width: ${mediaSize}) {
        margin-left: 15px;
        transition: 0.2s ease-in;
        width: auto;
    }


`

