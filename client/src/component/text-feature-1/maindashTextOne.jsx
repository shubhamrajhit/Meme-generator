import React, { Component } from 'react'
import Font from './font'
import FontSize from './fontSize'
import Color from './color'
import TextAlign from './textAlign'
import VerticalAlign from './verticalAlign'
import Italic from './Italic'
import Bold from './bold'
import Capitlise from './capitlise'
import OutlineColor from './OutlineColor'
class maindashTextOne extends Component {
    state={
        textAlign:null,
        fontSize:null,
        verticalAlign:null,
        color:null,
        font:null
    }
    handltextAlign=(text)=>{
      this.props.handletextFeaturetext(text)
    }
    handleFontSize=(fontsize)=>{
        this.props.handletextFeatureFontSize(fontsize)
    }
    handleVerticalAlign=(vertical)=>{
        this.props.handletextFeatureVertical(vertical)
    }
    handleFont=(font)=>{
        this.props.handletextFeatureFont(font)
    }
    handleColor=(color)=>{
        this.props.handletextFeatureColor(color)
    }
    handleOutColor=(color)=>{
        this.props.handletextFeatureOutColorOne(color)
    }
    handleChecklistBold=(e)=>{
        this.props.handleChecklistBold(e)
    }
    handleChecklistCaps=(e)=>{
        this.props.handleChecklistCaps(e)
    }
    handleChecklistItalic=(e)=>{
        this.props.handleChecklistItalic(e)
    }
   

    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="card pb-4" style={{width:'100%'}}>
                        <div className="row">
                        <div style={{ height:450, overflowY: "scroll" }}>
                            <div className="col-md-12 mt-3 ml-3"><span><b>Font</b></span> <Font handleFont={this.handleFont} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b></b></span> <Bold handleChecklistBold={this.handleChecklistBold} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b></b></span> <Italic handleChecklistItalic={this.handleChecklistItalic} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b></b></span> <Capitlise handleChecklistCaps={this.handleChecklistCaps} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b>Color</b></span> <Color handleColor={this.handleColor} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b>OutlineColor</b></span> <OutlineColor handleOutColor={this.handleOutColor} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b>FontSize</b></span> <FontSize handleFontSize={this.handleFontSize} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b>Text Align</b></span> <TextAlign handltextAlign={this.handltextAlign} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b>Vertical Align</b></span> <VerticalAlign handleVerticalAlign={this.handleVerticalAlign} /></div>
                        </div>
                        </div>
                       
                    
                    </div>
                </div>
                
            </div>
        )
    }
}
export default maindashTextOne