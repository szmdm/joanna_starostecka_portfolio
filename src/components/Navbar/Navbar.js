import React from 'react';
import { Nav, NavbarContainer, NavLogo, Navicon } from './navbarStyle';


export const Navbar = ({toggle, isOpen}) => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} style={{height: '80px'}} alt='logo' />
                    </NavLogo>
                    <Navicon onClick={toggle} isOpen={isOpen}>
                        <img src={process.env.PUBLIC_URL + '/assets/menu_bar.svg'} style={{height: '50px'}} alt='menu' />
                    </Navicon>
                </NavbarContainer>
            </Nav>
        </>
    )
}