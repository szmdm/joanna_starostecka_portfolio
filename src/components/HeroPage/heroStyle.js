import styled from 'styled-components';
import { mediaSize } from '../../variables/Mixins';


export const HeroContainer = styled.section`
    height: auto;
    
`

export const HeroContent = styled.div`
    height: calc(100vh - 280px);
    max-height: 100%;
    width: 100%;
`

export const WelcomeContent = styled.div`
    height: 360px;
    width: 510px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 100px;

    @media screen and (max-width: ${mediaSize}) {
        padding-left: 15px;
        transition: 0.2s ease-in;
        width: auto;
    }
`

export const OpenTitle = styled.div`
    line-height: 45px;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 50px;

    &::after {
        position: relative;
        display: flex;
        content: '';
        height: 2px;
        bottom: -20px;
        background-color: black;
        width: 100%;
    }
`

export const OpenText = styled.div`
    line-height: 35px;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 100px;
    width: 510px;

    @media screen and (max-width: ${mediaSize}) {
        transition: 0.2s ease-in;
        width: auto;
    }
`

export const OpenContact = styled.div`
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
`

export const ProjectsTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
    width: auto;
    padding: calc(100vh - 777px) 0 0 100px;
    color: black;

    @media screen and (max-width: ${mediaSize}) {
        padding: calc(100vh - 710px) 0 0 15px;
        transition: 0.2s ease-in;
    }
`

