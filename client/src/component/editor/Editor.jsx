import React, { Component } from 'react'
import FeatureImg from '../feature-img/FeatureImg'
import Text from '../text/text'
import Textsecond from '../text/textsecond'
import TextThird from '../text/textThird'
import MaindashTextOne from '../text-feature-1/maindashTextOne'
import MaindashTextTwo from '../text-feature-2/maindashTextTwo'
import ScreenCapture from './screenCapture'
import ModelForm from './ModelForm'
import Draggable from 'react-draggable'
import Draw from '../draw/Draw'
import MyOwnImg from '../myOwnImg/MyForm'



class Editor extends Component {
    state={
        imgref:"450",
        url:null,
        selectimg:null,
        shareurl:null,
        textFirst:null,
        dtextO:false,
        dtextT:false,
        textsecond:null,
        textThird:null,
        isbold:null,
        iscaps:null,
        isitalic:null,
        textAlign:null,
        fontsize:null,
        verticalAlign:null,
        font:null,
        color:null,
        colorO:null,
        isboldT:null,
        isitalicT:null,
        textAlignT:null,
        fontsizeT:null,
        verticalAlignT:null,
        fontT:null,
        colorT:null,
        colorOT:null,
        activeDrags: 0,
        myimg:null
      
      
    }
    // Select background image.......

    selectedimg=(url)=>{
        this.setState({
            ...this.state,
            url:url
        })
    }
    // Select Text input......

    FirstTextItem=(e)=>{
        this.setState({
            ...this.state,
            textFirst:e.target.value
        })
  
    }
    
    secondTextItem=(e)=>{
        this.setState({
            ...this.state,
            textsecond:e.target.value
        })
  
    }
    thirdTextItem=(e)=>{
        this.setState({
            ...this.state,
            textThird:e.target.value
        })
       
    }
    // display property of maindashText

    textdisplay=(e)=>{
        this.setState((prevState)=>{
            return {dtextO: !prevState.dtextO};    
        });
    }
    textSdisplay=(e)=>{
        this.setState((prevState)=>{
            return {dtextT: !prevState.dtextT};    
        });
    }
    // MaindashTextOne feature.......

    handletextFeaturetext=(text)=>{
        this.setState({
            ...this.state,
            textAlign:text
        })
        
    }
    handletextFeatureFontSize=(font)=>{
        this.setState({
            ...this.state,
            fontsize:font
        })
        
    }
    handletextFeatureVertical=(vertical)=>{
        this.setState({
            ...this.state,
            verticalAlign:vertical
        })
        
    }
    handletextFeatureFont=(font)=>{
        this.setState({
            ...this.state,
            font:font
        })
        
    }
    handletextFeatureColor=(color)=>{
        this.setState({
            ...this.state,
            color:color
        })
        
    }
    handletextFeatureOutColorOne=(color)=>{
        this.setState({
            ...this.state,
            colorO:color
        })
    }
    handleChecklistItalic=(e)=>{
        this.setState({
            ...this.state,
            isitalic:e
        })
    }
    handleChecklistBold=(e)=>{
        this.setState({
            ...this.state,
            isbold:e
        })
    }
    handleChecklistCaps=(e)=>{
        this.setState({
            ...this.state,
            iscaps:e
        })
    }
    // MaindashTextTwo features........


    handletextFeaturetextTwo=(text)=>{
        this.setState({
            ...this.state,
            textAlignT:text
        })
        
    }
    handletextFeatureFontSizeTwo=(font)=>{
        this.setState({
            ...this.state,
            fontsizeT:font
        })
        
    }
    handletextFeatureVerticalTwo=(vertical)=>{
        this.setState({
            ...this.state,
            verticalAlignT:vertical
        })
        
    }
    handletextFeatureFontTwo=(font)=>{
        this.setState({
            ...this.state,
            fontT:font
        })
        
    }
    handletextFeatureColorTwo=(color)=>{
        this.setState({
            ...this.state,
            colorT:color
        })
        
    }
    handletextFeatureOutColorTwo=(color)=>{
        this.setState({
            ...this.state,
            colorOT:color
        })
    }
    handleChecklistItalicTwo=(e)=>{
        this.setState({
            ...this.state,
            isitalicT:e
        })
    }
    handleChecklistBoldTwo=(e)=>{
        this.setState({
            ...this.state,
            isboldT:e
        })
    }
    onStart = () => {
        this.setState({
            ...this.state,
            activeDrags: ++this.state.activeDrags
        });
      };
    
      onStop = () => {
        this.setState({
            ...this.state,
            activeDrags: --this.state.activeDrags
        });
      };
   
    
    handleshareurl=(url)=>{
        this.setState({
            ...this.state,
            shareurl:url
        })
    }
    handleownimg=(e)=>{
        this.setState({
            ...this.state,
            selectimg:e.name
        })
    }

    ownImgUrl=(e)=>{
        var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            var img = new Image;
            img.onload = function(){
              ctx.drawImage(img,0,0,420,500); 
            };
            img.src =e.filePath
        
    }
    
    // Select background image.......

    selectedimg=(e)=>{
        var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            var img = new Image;
            img.onload = function(){
              ctx.drawImage(img,0,0,420,500); 
            };
            img.src =e
           
    }
    
   
    render() {
        const textStyle = {
            position:"absolute",
            fontFamily:this.state.font,
            fontSize:this.state.fontsize,
            fontStyle:this.state.isitalic ? "italic":"normal",
            fontWeight:this.state.isbold ? "bold":"normal",
            textTransform:this.state.iscaps ?"uppercase":"normal",
            color:this.state.color,
            webkitTextFillColor:this.state.color,
            webkitTextStrokeWidth:"1px",
            WebkitTextStrokeColor:this.state.colorO,
            userSelect: "none",
            marginTop:100
          }
          const textStyle1={
            position:"absolute",
            color:this.state.color,
            fontFamily:this.state.fontT,
            fontSize:this.state.fontsizeT,
            fontStyle:this.state.isitalicT ? "italic":"normal",
            fontWeight:this.state.isboldT ? "bold":"normal",
            color:this.state.colorT,
            userSelect: "none" , 
            marginTop:300  
          }
          const myStyle = {
            position:"absolute",
            textAlign:"center",
            color:"red",
            fontFamily:"palatino",
            fontSize:"34px",
            fontStyle:"normal",
            fontWeight:"bold",
            marginTop:200
           
          }
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
       
    

     

        return (
            
            <div className="container mt-5">
                <div className="row mb-5" style={{backgroundColor:'#fff',height:'100vh'}}>
                   
                    <div className="col-md-5 mt-5" style={{textAlign:this.state.textAlign}} >
                        <ul >
                            <li style={{display:'inline-block'}}> <Draw /></li>
                            <li style={{display:'inline-block'}}><MyOwnImg ownImgUrl={this.ownImgUrl} /></li>
                        </ul>
                       
                        
                        <div className="card" id='capture' style={{border:'none',height:500,width:450}} >
                      
                        <canvas id="myCanvas" width="400" height="500" style={{border:"1px solid #d3d3d3"}}></canvas>
                               
                            
                        <Draggable {...dragHandlers} >
                            <div id="textone"   
                                style={this.state.dtextO ?{...textStyle}:{...myStyle}}
                                >
                                {this.state.textFirst}    
                            </div>
                            </Draggable>
                            <Draggable {...dragHandlers} >
                                <div id="textone" 
                                    style={this.state.dtextT ?{...textStyle1}:{...myStyle}}
                                     >
                                    {this.state.textsecond}   
                                </div>
                            </Draggable>
                            <Draggable {...dragHandlers} >
                            <div className="thirdtext "style={this.state.dtextO ?{...textStyle}:{...myStyle}}>
                                <h3>{this.state.textThird}</h3>
                            </div>  
                            </Draggable>
                        </div>
                            
                       
                    
                    </div>
                    <div className="col-md-7 mt-5">
                        <div className="row">
                            <div className="col-md-7" id="editor1">
                                <div className="featureimg">
                                    <div className="card" style={{border:'none'}}>
                                        <div style={{ height: 300, overflowY: "scroll" }}>
                                            <FeatureImg selectedimg={this.selectedimg} />
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="edittext">
                                    <Text FirstTextItem={this.FirstTextItem} textdisplay={this.textdisplay} />
                                </div>
                                <div className="edittext">
                                    <Textsecond secondTextItem={this.secondTextItem} textSdisplay={this.textSdisplay} />
                                </div>
                                <div className="edittext mt-2">
                                <input type="text" class="form-control text" id="3" placeholder="something post...." onChange={this.thirdTextItem} />
                                </div>
                                {/* <ScreenCapture  /> */}
                                <ModelForm imgurl={this.state.url} shareurl={this.state.shareurl} handleshareurl={this.handleshareurl} />
                                
                                
                               
                            </div>
                            {this.state.dtextO ? 
                                <div className="col-md-5">
                                <MaindashTextOne 
                                    handletextFeaturetext={this.handletextFeaturetext} 
                                    handletextFeatureFontSize={this.handletextFeatureFontSize}
                                    handletextFeatureVertical={this.handletextFeatureVertical}
                                    handletextFeatureFont={this.handletextFeatureFont}
                                    handletextFeatureColor={this.handletextFeatureColor}
                                    handletextFeatureOutColorOne={this.handletextFeatureOutColorOne}
                                    handleChecklistBold={this.handleChecklistBold}
                                    handleChecklistCaps={this.handleChecklistCaps}
                                    handleChecklistItalic={this.handleChecklistItalic}        
                                />
                            </div>
                            : null}
                            {this.state.dtextT ? 
                                <div className="col-md-5">
                                <MaindashTextTwo
                                    handletextFeaturetextTwo={this.handletextFeaturetextTwo} 
                                    handletextFeatureFontSizeTwo={this.handletextFeatureFontSizeTwo}
                                    handletextFeatureVerticalTwo={this.handletextFeatureVerticalTwo}
                                    handletextFeatureFontTwo={this.handletextFeatureFontTwo}
                                    handletextFeatureColorTwo={this.handletextFeatureColorTwo}
                                    handletextFeatureOutColorTwo={this.handletextFeatureOutColorTwo}
                                    handleChecklistBoldTwo={this.handleChecklistBoldTwo}
                                    handleChecklistItalicTwo={this.handleChecklistItalicTwo}        
                                />
                            </div>
                            : null}

                           
                        </div>
                       
                    </div>
                </div>
                </div>
                
                
            
        )
    }
}
export default Editor