import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import html2canvas from 'html2canvas'
import {
  FacebookShareButton,
  FacebookIcon
} from 'react-share';

const ModelForm = (props) => {
  const {
    buttonLabel,
    className
  } = props;
 
 
  const test = () => {
  
    html2canvas(document.querySelector("#capture"))
       .then(function (canvas) {
          // document.body.appendChild(canvas);
          // var c = document.getElementById("my_canvas_id");
          // var ctx = c.getContext("2d");
          // var img = document.getElementById("myCanvas");
          // ctx.drawImage(img,0,0,450,450);
          // var sourceCanvas = document.getElementById("my_canvas");
          // var destCanvas = document.getElementById("my_canvas_id");
          // var destCtx = destCanvas.getContext('2d');
          // destCtx.drawImage(sourceCanvas,10,10,400,400);
      
          var data = canvas.toDataURL("image/png",0.9);
         
          handlepassurl(data)
       })
    
        
  }

  // const final=()=>{
  //   var myCanvas = document.getElementById('my_canvas_id');
  //   var ctx = myCanvas.getContext('2d');
  //   var img = new Image;
  //   img.onload = function(){
  //     ctx.drawImage(img,0,0,400,400); // Or at whatever offset you like
  //   };
  //   img.src = props.shareurl;
  // }

  function handlepassurl(url){
    props.handleshareurl(url)
  }

  function both(){
    toggle()
    test()
  }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="mt-4">
    <Button color="danger" onClick={both} >Generate Meme</Button>
      <Modal isOpen={modal} id="canvas_pack" toggle={toggle} className={className}>
        <ModalBody>
          {/* <canvas id="my_canvas_id" width="450" height="450" style={{border:"1px solid #d3d3d3"}} ></canvas> */}
          <img src={props.shareurl} style={{width:450,height:500}} /> 
         
        </ModalBody>
        <ModalFooter>
            <a href={props.shareurl} download style={{marginRight:50}}> <i class="fa fa-download fa-2x" aria-hidden="true"></i></a>
          <FacebookShareButton url={props.shareurl}>
                <FacebookIcon logoFillColor="white" />
          </FacebookShareButton>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModelForm;