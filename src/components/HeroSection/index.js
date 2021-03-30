import React, {useState} from 'react';

import {HeroContainer, HeroContent, HeroH1, HeroBg, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from "./HeroSectionElement";

import {Button} from "../ButtonElement";
import {NavLinks} from "../Navbar/NavbarElement";

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id='home'>
            <HeroContent>
                <HeroH1> Virtual Banking Made Easy </HeroH1>
                <HeroP> Sign Up for a new account today and receive $250 in credit towards your new payment</HeroP>
                <HeroBtnWrapper>
                    <Button
                        to='discover'
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

    );
}

export default HeroSection;