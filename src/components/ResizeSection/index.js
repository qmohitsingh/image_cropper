import React, {useContext} from 'react';

import {
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesH3,
    ServicesP,
    FormBtn,
    FormInput,
    FormSelect,
    Form
} from "./ResizeSectionElement";

import icon from '../../images/people.svg'
import {Button} from "../ButtonElement";
import {FileUploadButton} from "../FileUploadButton";

import {downloadImage, resizeImage} from "../utills";

import {ResizeContext} from "../../StateManagement/ResizeContext";

const Resize = ({filePath, fileName}) => {

    const {
        files, pictures, fileError, setFiles, oriImgH, oriImgW, resizedImgH, resizedImgW, resizedPicture, resized,
        setPictures, setFileError, setResizedImgW, setResizedImgH, setResizedPicture,
    } = useContext(ResizeContext);

    const handleDownloadImage = () => {
        downloadImage(pictures[0], files[0].name)
    }

    const handleWidthChange = (e) => {
        setResizedImgW(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'));
    }

    const handleHeightChange = (e) => {
        setResizedImgH(e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleResize = async () => {
        await setResizedPicture(await resizeImage(pictures[0]));
    }

    return (
        <ServicesContainer id='image resizer'>
            <ServicesH1>Image Resizer</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={pictures && pictures.length > 0 ? pictures : icon}/>
                    <ServicesH2>{oriImgH}&times;{oriImgW}</ServicesH2>
                    {!fileError ? <ServicesP>Please click below to upload a new image({['.jpg', '.jpeg', '.gif', '.png'].join(' ')}) to resize.</ServicesP> :
                    <ServicesH3>{fileError}</ServicesH3> }
                    <FileUploadButton
                        buttonText={'Select Image'}
                        imgExtension={['.jpg', '.jpeg', '.gif', '.png']}
                        setFiles={setFiles}
                        setPictures={setPictures}
                        setFileError={setFileError}
                    />
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Choose Size</ServicesH2>
                    <Form onSubmit={handleSubmit}>
                        <FormBtn>
                            Height
                        </FormBtn>
                        <FormInput
                            type={'text'}
                            placeholder='pixels'
                            value={resizedImgH}
                            onChange={handleHeightChange}
                            oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                        />
                        <FormBtn>
                            Width
                        </FormBtn>
                        <FormInput
                            type={'text'}
                            placeholder='pixels'
                            value={resizedImgW}
                            onChange={handleWidthChange}
                        />
                        {/*<FormSelect>*/}
                        {/*    <option value="pixels">pixels</option>*/}
                        {/*</FormSelect>*/}
                    </Form>
                    <br/>
                    {/*<ServicesP></ServicesP>*/}
                    <Button
                        to='home'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        onClick={handleResize}
                    >Resize</Button>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={resizedPicture ? resizedPicture : icon}/>
                    <ServicesH2>{resizedImgH || 0}&times;{ resizedImgW || 0 }</ServicesH2>
                    <ServicesP>Please click below to download the above image.</ServicesP>
                    <Button
                        to='home'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        onClick={handleDownloadImage}
                    >Download</Button>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>

    );
}

export default Resize;