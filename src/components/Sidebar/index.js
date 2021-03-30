
import React from 'react';

import {SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu,SidebarLink, SidebarBtn, SidebarRoute} from "./SidebarElement";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}> About </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}> About </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}> About </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}> About </SidebarLink>
                </SidebarMenu>
                <SidebarBtn>
                    <SidebarRoute to='/signin' onClick={toggle}> Sign In </SidebarRoute>
                </SidebarBtn>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;