import styled from 'styled-components';
import { mediaSize } from '../../variables/Mixins';
import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';

export const ProjectContainer = styled.div`
    
    height: 100vh;
    

    h1 {
        text-align: left;
        margin: 25px 0 10px 100px;
        font-size: clamp(1.5rem, 0.4vw + 1.43rem, 1.75rem);
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

    .goProject {
        display: flex;
        &:hover {
        color: gold;
        transition: ease-in;
        cursor: pointer;
    }
    }
   
`

export const ProjectButton = styled(Link)`
    display: flex;
    font-size: clamp(0.88rem, 0.4vw + 0.8rem, 1.13rem);
    border: none;
    color: black;
    /* transition: 0.2s ease-in; */
    background-color: white;
    margin: 0 0 20px 100px;
    text-decoration: none;


    @media screen and (max-width: ${mediaSize}) {
        margin-left: 15px;
        transition: 0.2s ease-in;
        width: auto;
    }
`

const move = keyframes` 
    from { left: 0px;} 
     to { left: 25px;}  

`

export const ArrowIcon = styled.div`
    margin-left: 50px;
    animation: ${move} 3s linear forwards;

`