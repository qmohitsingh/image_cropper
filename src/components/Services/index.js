import React from 'react';

import {ServicesContainer, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH1, ServicesH2, ServicesP} from "./ServicesElement";

import icon from '../../images/car.svg'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help you to reduce fees and increase overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help you to reduce fees and increase overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help you to reduce fees and increase overall revenue</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>

    );
}

export default Services;