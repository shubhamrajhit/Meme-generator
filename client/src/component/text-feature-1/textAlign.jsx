import React, { Component } from 'react'

class textAlign extends Component {
    state={
       
    }
   
    handlechange=(e)=>{
       this.props.handltextAlign(e.target.id)
    }
    render() {
        
        return (
           
            <div>
                <div class="text-align mt-3 ml-2">
                    <div  class="avatar1" style={{color:'#fff',backgroundColor:'#000'}} id="left" onClick={this.handlechange} >Left</div>
                    <div  class="avatar1" style={{color:'#000',backgroundColor:'#ddd'}} id="center" onClick={this.handlechange}>Center</div>
                    <div  class="avatar1" style={{color:'#000',backgroundColor:'#ddd'}} id="right" onClick={this.handlechange}>Right</div>
                    
                </div>
            </div>
        )
       
    }
}
export default textAlign