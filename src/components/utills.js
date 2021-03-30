import { saveAs } from 'file-saver';

export const downloadImage = (filePath, fileName) => {
    saveAs(filePath, fileName)
}


export const formatBytes = (a , b= 2) => {
    if (0 === a)
        return "0 Bytes";
    const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1024));
    return parseFloat((a/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]
}

export const ERROR = {
    NOT_SUPPORTED_EXTENSION: 'NOT_SUPPORTED_EXTENSION',
    FILESIZE_TOO_LARGE: 'FILESIZE_TOO_LARGE'
}


export const resizeImage = async (file, fileName='output', mimeType='image/jpeg', width=100, height=100, quality=1) => {
    try {
        return await new Promise(async function(resolve,reject){

            // We create an image to receive the Data URI
            let img = document.createElement('img');

            // When the event "onload" is triggered we can resize the image.
            img.onload = function()
            {
                // We create a canvas and get its context.
                let canvas = document.createElement('canvas');
                let ctx = canvas.getContext('2d');

                // We set the dimensions at the wanted size.
                canvas.width = width;
                canvas.height = height;

                // We resize the image with the canvas method drawImage();
                ctx.drawImage(this, 0, 0, width, height);

                let dataURI = canvas.toDataURL();

                // This is the return of the Promise
                resolve(dataURI);
            };

            // We put the Data URI in the image's src attribute
            img.src = file;

        })
        // save image to database here
        //return image;
    } catch (e) {
        console.warn(e);
    }
};