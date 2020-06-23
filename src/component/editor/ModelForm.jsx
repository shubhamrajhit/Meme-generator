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
          var data = canvas.toDataURL("image/png",0.9);
         
          handlepassurl(data)
           
       });
  }

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
    <div className="mt-5">
    <Button color="danger" onClick={both} >Generate Meme</Button>
      <Modal isOpen={modal} id="canvas_pack" toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <img src={props.shareurl}
           style={{width:400,height:400}}
          ></img>
        </ModalBody>
        <ModalFooter>
          <FacebookShareButton url={props.shareurl}>
                <FacebookIcon logoFillColor="white" />
          </FacebookShareButton>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModelForm;