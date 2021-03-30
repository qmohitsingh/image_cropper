import React, {createContext, useState} from 'react';

export const ResizeContext = createContext();

export const ResizeContextProvider = (props) => {

    const [files, setFiles]         = useState([]);
    const [pictures, setPictures]   = useState([require('../images/people.svg').default]);
    const [fileError, setFileError] = useState(null);


    const [resizedPicture, setResizedPicture]   = useState([require('../images/people.svg').default]);

    const [oriImgH, setOriImgH]         = useState(0);
    const [oriImgW, setOriImgW]         = useState(0);

    const [resizedImgH, setResizedImgH] = useState();
    const [resizedImgW, setResizedImgW] = useState();

    const [resized, setResized] = useState(false);
    const [selectedImg, setSelectedImg] = useState(false);

    return (
        <ResizeContext.Provider value={{
            files, pictures, fileError, oriImgH, oriImgW, resizedImgH, resizedImgW, resizedPicture, resized, selectedImg,
            setFiles, setPictures, setFileError, setOriImgH, setOriImgW, setResizedImgH, setResizedImgW, setResizedPicture, setResized, setSelectedImg
        }}
        >
            {props.children}
        </ResizeContext.Provider>
    )
}