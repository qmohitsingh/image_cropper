import React, {useContext} from 'react';

import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, Topline, Heading, Subtitle, BtnWrap, Column2, Img, ImgWrap} from "./InfoSectionElement";
import {FileUploadButton} from "../FileUploadButton";

const InfoSection = ({primary, dark, dark2, lightBg, id, imgStart, topLine, lightText, darkText, headLine, description, img, alt}) => {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Topline>{topLine}</Topline>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText} >{description}</Subtitle>
                                <BtnWrap>
                                    {/*<Button*/}
                                    {/*    to='home'*/}
                                    {/*    smooth={true}*/}
                                    {/*    duration={500}*/}
                                    {/*    spy={true}*/}
                                    {/*    exact='true'*/}
                                    {/*    offset={-80}*/}
                                    {/*    primary={primary ?  1 : 0}*/}
                                    {/*    dark={dark ? 1 : 0}*/}
                                    {/*    dark2={dark2 ? 1 : 0}*/}
                                    {/*>{buttonLabel}</Button>*/}
                                    <FileUploadButton buttonText={'Select Image'} primary={primary} dark={dark} dark2={dark2}/>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

        </>
    );

}

export default InfoSection;