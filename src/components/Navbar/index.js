
import React, {useState, useEffect} from 'react';
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll } from 'react-scroll';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavItem,
    NavLinks,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavLangMenu
} from "./NavbarElement";

import {FaBars} from 'react-icons/fa'

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else{
            setScrollNav(false);
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            ImG
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu >
                            {/*<NavItem>*/}
                            {/*    <NavLinks*/}
                            {/*        to='home' smooth={true} duration={500} spy={true} exact='true' offset={-80}*/}
                            {/*    >Home</NavLinks>*/}
                            {/*</NavItem>*/}
                            <NavItem>
                                <NavLinks
                                    to='resize' smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >Resize</NavLinks>
                            </NavItem>
                            {/*<NavItem>*/}
                            {/*    <NavLinks to='crop'*/}
                            {/*              smooth={true} duration={500} spy={true} exact='true' offset={-80}*/}
                            {/*    >Crop</NavLinks>*/}
                            {/*</NavItem>*/}
                            <NavItem>
                                <NavLinks to='services'
                                          smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >About</NavLinks>
                            </NavItem>
                            {/*<NavItem>*/}
                            {/*    <NavLinks to='signup'>Sign Up</NavLinks>*/}
                            {/*</NavItem>*/}
                        </NavMenu>
                        <NavBtn>
                            <NavLangMenu>English</NavLangMenu>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
    </>);
}

export default Navbar;