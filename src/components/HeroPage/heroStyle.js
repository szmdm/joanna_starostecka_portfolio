import styled from 'styled-components';
import { mediaSize } from '../../variables/Mixins';


export const HeroContainer = styled.section`
    height: auto;
    
`

export const HeroContent = styled.div`
    height: calc(100vh - 280px);
    max-height: 100%;
    width: 100%;
    margin-bottom: 15px;

    @media screen and (max-width: ${mediaSize}) {
        height: auto;
        margin-bottom: 20px;
    }
`

export const WelcomeContent = styled.div`
    font-family: "Arboria";
    font-weight: 700;
    display: flex;
    height: auto;
    flex-basis: 510px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 100px;
    color: #3E4136;

    @media screen and (max-width: ${mediaSize}) {
        padding-left: 15px;
        transition: 0.2s ease-in;
        width: auto;
    }
`

export const OpenTitle = styled.div`
    line-height: 45px;
    font-size: 2.25rem;
    font-size: clamp(1.5rem,2.25rem,3vw);
    font-weight: bold;
    margin-bottom: 50px;

    &::after {
        position: relative;
        display: flex;
        content: '';
        height: 2px;
        bottom: -20px;
        background-color: #66665C;
        width: 100%;
    }
`

export const OpenText = styled.div`
    line-height: 35px;
    font-size: 1.75rem;
    font-size: clamp(0.9rem,1.75rem,3vw);
    font-weight: bold;
    margin-bottom: 100px;
    width: 510px;

    @media screen and (max-width: ${mediaSize}) {
        transition: 0.2s ease-in;
        width: auto;
        line-height: 30px;
        margin-bottom: 25px;
    }
`

export const OpenContact = styled.div`
    font-size: clamp(0.7rem,1.125rem,3vw);
    font-style: normal;
    font-weight: 400;
    margin-bottom: 20px;

    @media screen and (max-width: ${mediaSize}) {
        margin-bottom: 10px;
    }
`

export const ProjectsTitle = styled.div`
    font-size: 2.25rem;
    font-size: clamp(1.1rem,2.25rem,3vw);
    font-weight: bold;
    width: auto;
    padding: calc(100vh - 666px) 0 0 100px;
    color: #3E4136;

    @media screen and (max-width: ${mediaSize}) {
        display: none;
    }
`

