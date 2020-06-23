import React, { Component } from 'react'

class color extends Component {
    state={

    }
    handlechange=(e)=>{
        this.props.handleColor(e.target.id)
     }
    render() {
        return (
            <div>
                <div class="mainavtar mt-2 ml-2">
                        <div  class="avatar" style={{backgroundColor:'rgb(255, 0, 0)'}} id="rgb(255, 0, 0)" onClick={this.handlechange}  ></div>
                        <div  class="avatar" style={{backgroundColor:'rgb(255, 255, 0)'}} id="rgb(255, 255, 0)" onClick={this.handlechange} ></div>
                        <div  class="avatar" style={{backgroundColor:'rgb(0, 0, 255)'}} id="rgb(0, 0, 255)" onClick={this.handlechange} ></div>
                </div>

                <div class="insidetext mt-3 ml-2">
                    <div  class="avatar1" style={{color:'#fff',backgroundColor:'#000'}} id="#fff" onClick={this.handlechange} >Light</div>
                    <div  class="avatar1" style={{color:'#000',backgroundColor:'#ddd'}} id="#000"  onClick={this.handlechange} >Dark</div>
                </div>
                
            </div>
        )
    }
}
export default  color