import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';



export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 580px;
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
    right: 6rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

    @media screen and (max-width: 400px) {
        right: 3rem;
        transition: 0.3s ease-in-out
    }
`

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    position: absolute;
    top: 15rem;
    right: 6rem;

    @media screen and (max-width: 400px) {
        grid-template-rows: repeat(4, 60px);
        right: 3rem;
        transition: 0.3s ease-in-out;
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5 rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    &:hover{
        color: gold;
        transition: 0.3s ease-in-out;
    }
`

export const SidebrWrap = styled.div`
    display: flex;
    justify-content: center;
    
`

export const SidebarRoute = styled(Link)`
    background: pink;
    white-space: nowrap;
    padding: 15px 60px;
    color: blue;
    font-size: 15px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.3 ease-in-out;
    text-decoration: none;

        &:hover {
            transition: 0.2 ease-in-out;
            background: black;
            color: #010666;
            }
`