import React, {useContext, useState} from 'react';
import {Button} from "./ButtonElement";
import {ERROR, formatBytes} from "./utills";

import {ResizeContext} from "../StateManagement/ResizeContext";

export const FileUploadButton = ({primary, dark, dark2, buttonText, name, singleImage=true, accept, imgExtension=['.png', '.gif' , '.jpg', '.jpeg'], maxFileSize=5242880}) => {

    const [inputElement, setInputElement] = useState(null);

    const {setFiles, setPictures, setFileError, setOriImgH, setOriImgW} = useContext(ResizeContext);

    /*
	 Check file extension (onDropFile)
	 */
    const hasExtension = (fileName) => {
        console.log(imgExtension, "fileName: ", fileName);
        const pattern = '(' + imgExtension.join('|').replace(/\./g, '\\.') + ')$';
        return new RegExp(pattern, 'i').test(fileName);
    }

    /*
     Handle file validation
     */
    const onDropFile = (e) => {
        const files = e.target.files;
        const allFilePromises = [];

        console.log(imgExtension)

        // Iterate over all uploaded files
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let fileError = {
                name: file.name,
            };

            console.log(imgExtension, files, file, file.name, "width1: ", file.offsetWidth, file.offsetHeight)
            //Check for file extension
            if (!hasExtension(file.name)) {
                fileError = Object.assign(fileError, {
                    type: ERROR.NOT_SUPPORTED_EXTENSION
                });
                setFileError(`max-size: ${formatBytes(maxFileSize) || '5 mb'} & allowed-extension: ${imgExtension.toString()}`);
                break;
            }

            // Check for file size
            if(file.size > maxFileSize) {
                fileError = Object.assign(fileError, {
                    type: ERROR.FILESIZE_TOO_LARGE
                });
                setFileError(`max-size: ${formatBytes(maxFileSize)} & allowed-extension: ${imgExtension.toString()}`);
                break;
            }

            allFilePromises.push(readFile(file));
            break;
        }

        Promise.all(allFilePromises).then(newFilesData => {
            const dataURLs = [];
            const files = [];

            newFilesData.forEach(newFileData => {
                dataURLs.push(newFileData.dataURL);
                files.push(newFileData.file);
            });
            setPictures(dataURLs);
            setFiles(files);
        });
    }

    const onUploadClick = (e) => {
        // Fixes https://github.com/JakeHartnell/react-images-upload/issues/55
        e.target.value = null;
    }

    /*
       Read a file and return a promise that when resolved gives the file itself and the data URL
     */
    const readFile = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            // Read the image via FileReader API and save image result in state.
            reader.onload = function (e) {

                let imageObj = new Image();
                imageObj.src = e.target.result;
                onImgLoad(imageObj)

                // Add the file name to the data URL
                let dataURL  = e.target.result;
                console.log("width: ", e.target)
                dataURL = dataURL.replace(";base64", `;name=${file.name};base64`);
                resolve({file, dataURL});
            };

            reader.readAsDataURL(file);
        });
    }

    /*
    * On image load
    */
    const onImgLoad = async (imageObj) => {
        imageObj = await imageObj;

        setOriImgH(imageObj.height);
        setOriImgW(imageObj.width);
    }


    /*
    On button click, trigger input file to open
   */
    const triggerFileUpload = () => {
        inputElement.click();
    }

    return(
        <>
            <Button
                to      = 'image resizer'
                smooth  = {true}
                duration= {500}
                spy     = {true}
                exact   = 'true'
                offset  = {-80}
                primary = {primary ? 'true' : ''}
                dark    = {dark    ? 'true' : ''}
                dark2   = {dark2   ? 'true' : ''}
                onClick = {triggerFileUpload}
            >
                {buttonText}
            </Button>
            <input
                type     = "file"
                ref      = {input => setInputElement(input)}
                name     = {name}
                multiple = {!singleImage}
                onChange = {onDropFile}
                onClick  = {onUploadClick}
                accept   = {imgExtension.toString()}
                style    = {{display: 'none'}}
            />
        </>

    );
};