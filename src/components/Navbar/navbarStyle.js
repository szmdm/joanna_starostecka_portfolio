import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaSize } from '../../variables/Mixins';

export const Nav = styled.nav`
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;


    @media screen and (max-width: ${mediaSize}) {
        transition: 0.8s all ease;
    }

`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    margin-top: 120px;
    margin-bottom: 80px;

`

export const NavLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 100px;

    @media screen and (max-width: ${mediaSize}) {
        margin-left: 15px;
        transition: 0.2s ease-in-out;
    }
`

export const Navicon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    cursor: pointer;
    margin-right: 100px;

    @media screen and (max-width: ${mediaSize}) {
        margin-right: 15px;
        transition: 0.2s ease-in-out
    }

`
