import React from 'react'

function Navbar() {
    return (
        
            <nav class="navbar navbar-expand-lg  mb-3" style={{backgroundColor:'#272829',height:60}}>
                <a class="navbar-brand" href="#"
                style={{
                    fontSize:32,
                    fontFamily:"arial-black",
                    marginLeft:110,

                }}
                >Meme<span
                style={{
                    fontSize:35,
                    fontFamily:"palatino",
                    color:"red"
                }}>Maker</span></a>
            </nav>
        
    )
}

export default Navbar
