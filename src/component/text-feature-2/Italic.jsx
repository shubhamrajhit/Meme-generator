import React, { Component } from 'react'

class Italic extends Component {
    state={
        isitalic:true
    }
    handleItalic = ()=>{
        this.setState((prevState)=>{
            return {isitalic: !prevState.isitalic};    
        });
        this.props.handleChecklistItalic(this.state.isitalic)
       
    };
    render() {
       
        return (
           <div >
                <input type="checkbox" onChange={ this.handleItalic }></input>
                <label style={{marginLeft:10}} ><i>Italic</i></label>
           </div>
           
                
          
        )
    }
}
export default Italic