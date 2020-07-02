import React, { Component } from 'react'

class outlineColorT extends Component {
    state={

    }
    handlechange=(e)=>{
        this.props.handleOutColor(e.target.id)
     }
    render() {
        return (
            <div>
                <div class="mainavtar mt-2 ml-2">
                        <div  class="avatar" style={{backgroundColor:'rgb(255, 0, 0)'}} id="rgb(255, 0, 0)" onClick={this.handlechange}  ></div>
                        <div  class="avatar" style={{backgroundColor:'rgb(255, 255, 0)'}} id="rgb(255, 255, 0)" onClick={this.handlechange} ></div>
                        <div  class="avatar" style={{backgroundColor:'rgb(0, 0, 255)'}} id="rgb(0, 0, 255)" onClick={this.handlechange} ></div>
                </div>
                
            </div>
        )
    }
}
export default outlineColorT