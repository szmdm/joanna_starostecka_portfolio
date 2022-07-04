import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import{ Link } from "react-router-dom";


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 610px;
    background-color: white;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => ( isOpen ? '0' : '-1000px' )};

    @media screen and (max-width: 400px) {
        width:100%;
    }
`

export const CloseIcon = styled(FaTimes)`
    color: #000;
`

export const Icon = styled.div`
    position: absolute;
    top: 7.5rem;
    right: 8rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

    @media screen and (max-width: 400px) {
        right: 4.8rem;
        transition: 0.3s ease-in-out
    }
`

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 40px);
    text-align: center;
    position: absolute;
    top: 15rem;
    right: 6rem;

    @media screen and (max-width: 400px) {
        grid-template-rows: repeat(7, 30px);
        right: 3rem;
        transition: 0.3s ease-in-out;
    }
`
// react scroll version

// export const SidebarLink = styled(LinkScroll)`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 1.2rem;
//     text-decoration: none;
//     list-style: none;
//     transition: 0.2s ease-in-out;
//     text-decoration: none;
//     color: #000;
//     cursor: pointer;

//     &:hover{
//         color: gold;
//         transition: 0.2s ease-in-out;
//     }

//     &.active {
//         color: gold;
//         font-weight: bold;
//     }
// `
export const SimpleLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    &:hover{
        color: gold;
        transition: 0.2s ease-in-out;
    }

    &.active {
        color: gold;
        font-weight: bold;
    }
`

export const SidebarWrapper = styled.div`
    height: 100%;
    width: auto;
`


