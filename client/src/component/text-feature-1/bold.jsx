import React, { Component } from 'react'

class bold extends Component {
    state={
        isbold:true,
        
    };
    handleBold = ()=>{
        this.setState((prevState)=>{
            return {isbold: !prevState.isbold};    
        });
        this.props.handleChecklistBold(this.state.isbold)
       
    };
    render() {
        return (
            
            <div>
                <input type="checkbox" onChange={ this.handleBold }></input>
                <label style={{marginLeft:10}}><b>Bold</b></label>
            </div>
        )
    }
}
export default bold