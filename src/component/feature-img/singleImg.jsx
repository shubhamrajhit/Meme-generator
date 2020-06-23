import React from 'react'

function singleImg(props) {

    function handleclick(){
        props.onselect(props.img)

    }
    console.log(props)

    return (
        <div className="img-fect" style={{display:'inline-block',marginLeft:8}}>
            <img src={props.img} style={{ height:80,width:80.5,cursor:'pointer'}} onClick={handleclick} />  
        </div>
    )
}
export default singleImg