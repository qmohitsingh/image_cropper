
import React from 'react';

import {FaInstagram, FaLinkedin, FaFacebook, FaYoutube} from "react-icons/fa";

import {animateScroll as scroll } from 'react-scroll';

import {
    FooterContainer,
    FooterLinkItems,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterWrap,
    FooterLink,
    FooterLinkTitle,
    SocialIcons,
    SocialMedia,
    SocialMediaWrap,
    SocialIconLink,
    SocialLogo,
    WebsiteRights
} from "./FooterElement";


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    {/*<FooterLinksContainer>*/}
                    {/*    <FooterLinksWrapper>*/}
                    {/*        <FooterLinkItems>*/}
                    {/*            <FooterLinkTitle> About us  </FooterLinkTitle>*/}
                    {/*            <FooterLink to='/signin'> About us </FooterLink>*/}
                    {/*            <FooterLink to='/signin'> Careers </FooterLink>*/}
                    {/*            <FooterLink to='/signin'> Investor </FooterLink>*/}
                    {/*            <FooterLink to='/signin'> About us </FooterLink>*/}
                    {/*        </FooterLinkItems>*/}
                    {/*        <FooterLinkItems>*/}
                    {/*            <FooterLinkTitle> About us  </FooterLinkTitle>*/}
                    {/*            <FooterLink to='/signin'> About us </FooterLink>*/}
                    {/*            <FooterLink to='/signin'> Careers </FooterLink>*/}
                    {/*            <FooterLink to='/signin'> Investor </FooterLink>*/}
                    {/*            <FooterLink to='/signin'> About us </FooterLink>*/}
                    {/*        </FooterLinkItems>*/}
                    {/*    </FooterLinksWrapper>*/}
                    {/*    <FooterLinksWrapper>*/}
                    {/*        <FooterLinkItems>*/}
                    {/*            <FooterLinkTitle> About us  </FooterLinkTitle>*/}
                    {/*            <FooterLink to='/signin'> About us </FooterLink>*/}
                    {/*            <FooterLink to='/signin'> Careers </FooterLink>*/}
                    {/*            <FooterLink to='/signin'> Investor </FooterLink>*/}
                    {/*            <FooterLink to='/signin'> About us </FooterLink>*/}
                    {/*        </FooterLinkItems>*/}
                    {/*        <FooterLinkItems>*/}
                    {/*            <FooterLinkTitle> About us  </FooterLinkTitle>*/}
                    {/*            <FooterLink to='/signin'> About us </FooterLink>*/}
                    {/*            <FooterLink to='/signin'> Careers </FooterLink>*/}
                    {/*            <FooterLink to='/signin'> Investor </FooterLink>*/}
                    {/*            <FooterLink to='/signin'> About us </FooterLink>*/}
                    {/*        </FooterLinkItems>*/}
                    {/*    </FooterLinksWrapper>*/}
                    {/*</FooterLinksContainer>*/}
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                ImG
                            </SocialLogo>
                            <WebsiteRights>
                                ImG © {new Date().getFullYear()} All rights reserved.
                            </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='/' target='_blank' aria-label='instagram'>
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='linkedin'>
                                    <FaLinkedin />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='linkedin'>
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href='/' target='_blank' aria-label='linkedin'>
                                    <FaYoutube />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    );
}

export default Footer;