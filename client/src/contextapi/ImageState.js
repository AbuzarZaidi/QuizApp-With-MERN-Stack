import React ,{useState} from 'react'
import ImageContext from './ImageContext';
const ImageState = (props) => {
    const[image,setImage]=useState(null);
    return (
       <ImageContext.Provider value={{image,setImage}}>
           {props.children}
       </ImageContext.Provider>
    )
}

export default ImageState