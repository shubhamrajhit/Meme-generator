import React, { Component } from 'react'

class capitlise extends Component {
    state={
        iscaps:true,
        
    };
    handleCaps = ()=>{
        this.setState((prevState)=>{
            return {iscaps: !prevState.iscaps};    
        });
        this.props.handleChecklistCaps(this.state.iscaps)
       
    };
    render() {
        return (
            
            <div>
                <input type="checkbox" onChange={ this.handleCaps }></input>
                <label style={{marginLeft:10}}><b>UPPERCASE</b></label>
            </div>
        )
    }
}
export default capitlise