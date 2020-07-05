import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import FileUpload from '../upload/FileUpload'



const MyForm = (props) => {
  const [modal, setModal] = useState(false);
  const [uploadedFile ,setUploaded]=useState({
    fileName:null,
    filePath:null
  })
  

  const {buttonLabel,className,ownImgUrl} = props;
  const toggle = () => setModal(!modal);

  const imgUpload=e=>{
    
    setUploaded({
      fileName:e.fileName ,
      filePath:e.filePath})

  }
  const handleClick=e =>{
    ownImgUrl(uploadedFile)
  }
  

  return (
    <div className="mt-1">
    <Button className="btn btn-dark ml-3" onClick={toggle} >Upload Own Image</Button>
      <Modal isOpen={modal} id="canvas_pack" toggle={toggle} className={className} >
      <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <FileUpload imgUpload={imgUpload} />
          {uploadedFile.filePath ? <img src={uploadedFile.filePath} style={{width:'100%' ,height:'100%'}} />:null}
        </ModalBody>
        <ModalFooter>
          {uploadedFile.filePath ? 
            <input type="submit" value="Add" className="btn btn-primary btn-block mt-4" onClick={handleClick} /> 
          :null}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MyForm;