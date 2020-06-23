import React from 'react'
import SingleImg from './singleImg'

function imageList({images,finalimg}) {
   
    function selectimg(img){
        finalimg(img);
    }
    return (
        images.map((image,index)=>{
            return(
                <SingleImg key= {image.id} id= {image.id} img={image.url} onselect={selectimg}/>
            ) 
            }) 
        )
}
export default imageList