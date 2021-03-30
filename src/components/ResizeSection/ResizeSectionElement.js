import styled from 'styled-components'

export const ServicesContainer = styled.div`
    height: 820px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    
    @media screen and (max-width: 768px) {
        height: 1100px;
    }
    
    @media screen and (max-width: 480px) {
        height: 1200px;
    }
    
`;

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
    
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 360px;
    padding: 30px;
    min-height: 160px;
    min-width: 160px;
    box-shadow: 0 1px 3px rgba(0,0,0,0,2);
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }  
`;

// export const ServicesIcon = styled.img`
//     height: 160px;
//     width: 160px;
//     margin-bottom: 10px;
// `;

export const ServicesIcon = styled.img`
    min-height: 50px;
    max-height: 50px;
    max-height: 250px;
    max-width: 200px;
    margin-bottom: 10px;
    border: solid 2px #010606;
`;



export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px; 
    
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;


export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px; 
`;

export const ServicesH3 = styled.h3`
    font-size: 0.5rem;
    color : red;
    text-align: center;
    margin-bottom: 10px; 
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 25px; 
`;


export const Form = styled.form`
    align-items: center;
    justify-content: center;
`;

export const FormBtn = styled.button`
    border-radius: 5px;
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: 8px 10px;
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: 14px;
    outline: none;
    border: none;
    //cursor: pointer;
    // display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    // &:hover {
    //     transition: all 0.2s ease-in-out;
    //     background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    // }
`;

export const FormInput = styled.input`
    border-radius: 5px;
    //background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: 5px 0px;
    margin: 3px;
    max-width: 50px;
    text-align: center;
    //color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: 14px;
    //outline: none;
    outline-color: #01BF71;
    //border: none;
    
    &:disabled {
        background: #dddddd;
    }
    
    
    @media screen and (max-width: 320px) {
        max-width: 160px;
    }
`;

export const FormSelect = styled.select`
    border-radius: 5px;
    white-space: nowrap;
    padding: 5px 0px;
    margin: 5px;
    max-width: 110px;
    font-size: 14px;
    outline: none;
    //outline-color: #01BF71;
    
    @media screen and (max-width: 786px) {
        max-width: 140px;
    }
`