import React, { Component } from 'react'

class verticalAlign extends Component {
    state={
        vertical:null
    }

    // handleChange=(e)=>{
    //     this.setState({
    //         ...this.state,
    //         vertical:e.target.value
    //     });
    //   }
      handleChange=(e)=>{
        var lang =e.target.value;
        this.props.handleVerticalAlign(lang)
    }
   
    render() {
        console.log(this.state.vertical)
        return (
            <div className="mt-2 ml-2">
            <select id="input-font" value={this.state.selected}  onChange={this.handleChange}>
                    <option value="top">Top</option>
                    <option value="middle">middle</option>
                    <option value="bottom">Bottom</option>
                    
            </select>
            
        </div>
        )
    }
}
export default verticalAlign
