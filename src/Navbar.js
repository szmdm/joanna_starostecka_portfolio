import React from 'react';
import { Nav, NavbarContainer, NavLogo, Navicon } from './navbarStyle';


export const Navbar = ({toggle}) => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} style={{height: '80px'}} alt='Logo' />
                    </NavLogo>
                    <Navicon onClick={toggle}>
                        <img src={process.env.PUBLIC_URL + '/assets/menu_bar.svg'} style={{height: '50px'}} alt='menu' />
                    </Navicon>
                </NavbarContainer>
            </Nav>
        </>
    )
}