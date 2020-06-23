import React, { Component } from 'react'
import FontT from './fontT'
import FontSizeT from './fontSizeT'
import ColorT from './colorT'
import TextAlignT from './textAlignT'
import VerticalAlignT from './verticalAlignT'
import ItalicT from './Italic'
import BoldT from './boldT'
import OutlineColorT from './outlineColorT'
class maindashTextTwo extends Component {
    state={
       
    }
    handltextAlign=(text)=>{
      this.props.handletextFeaturetextTwo(text)
    }
    handleFontSize=(fontsize)=>{
        this.props.handletextFeatureFontSizeTwo(fontsize)
    }
    handleVerticalAlign=(vertical)=>{
        this.props.handletextFeatureVerticalTwo(vertical)
    }
    handleFont=(font)=>{
        this.props.handletextFeatureFontTwo(font)
    }
    handleColor=(color)=>{
        this.props.handletextFeatureColorTwo(color)
    }
    handleOutColor=(color)=>{
        this.props.handletextFeatureOutColorTwo(color)
    }
    handleColor=(color)=>{
        this.props.handletextFeatureColorTwo(color)
    }
    handleChecklistBold=(e)=>{
        this.props.handleChecklistBoldTwo(e)
    }
    handleChecklistItalic=(e)=>{
        this.props.handleChecklistItalicTwo(e)
    }
   

    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div className="card pb-4" style={{width:'100%'}}>
                        <div className="row">
                            <div className="col-md-12 mt-3 ml-3"><span><b>Font</b></span> <FontT handleFont={this.handleFont} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b></b></span> <BoldT handleChecklistBold={this.handleChecklistBold} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b></b></span> <ItalicT handleChecklistItalic={this.handleChecklistItalic} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b>Color</b></span> <ColorT handleColor={this.handleColor} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b>Color</b></span> <OutlineColorT handleOutColor={this.handleOutColor} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b>FontSize</b></span> <FontSizeT handleFontSize={this.handleFontSize} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b>Text Align</b></span> <TextAlignT handltextAlign={this.handltextAlign} /></div>
                            <div className="col-md-12 mt-3 ml-3"><span><b>Vertical Align</b></span> <VerticalAlignT handleVerticalAlign={this.handleVerticalAlign} /></div>
                        </div>
                       
                    
                    </div>
                </div>
                
            </div>
        )
    }
}
export default maindashTextTwo