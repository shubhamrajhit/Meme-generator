import React from 'react'
import html2canvas from 'html2canvas'
import base64 from 'base-64'

function screenCapture(props) {
    
        const test = () => {
            html2canvas(document.querySelector("#myCanvas"))
               .then(function (canvas) {
                //   document.body.appendChild(canvas);
                  var data = canvas.toDataURL("image/png",.9);
                 
                  handlepassurl(data)
                   
               });
          }
          function handlepassurl(url){
            props.handleshareurl(url)
        }

        return (
            <div>
                <button className="btn btn-primary" onClick={test}>click</button>
               <a href="" id="blank">downloard</a>
            </div>
        )
    }

export default screenCapture