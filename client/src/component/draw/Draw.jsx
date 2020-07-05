import React, { Component } from 'react'


class Draw extends Component {
    state={
        isDrawing:false,      
        x:0,
        y:0,
        isdisplay:false,
        lineWidth:2
    }
   
    componentDidMount() {
        document.getElementById('myCanvas').addEventListener("mouseup", this.handleMouseUp);
        document.getElementById('myCanvas').addEventListener("mousedown", this.handleMouseDown);
        document.getElementById('myCanvas').addEventListener("mousemove", this.handleMouseMove);
    
    
    }  
       
        handleMouseDown=(e)=>{
            this.setState({
                x:e.offsetX,
                y:e.offsetY,
                isDrawing:true,

            })
           
          };
          handleMouseMove=(e)=>{
            const myPics = document.getElementById('myCanvas');
            const context = myPics.getContext('2d'); 
            if (this.state.isDrawing === true) {
              this.drawLine(context, this.state.x, this.state.y, e.offsetX, e.offsetY);
              this.setState({
                x:e.offsetX,
                y:e.offsetY
              })
              

              
            }
          };
          handleMouseUp=(e)=>{
            const myPics = document.getElementById('myCanvas');
            const context = myPics.getContext('2d'); 
            if (this.state.isDrawing === true) {
              this.drawLine(context, this.state.x, this.state.y, e.offsetX, e.offsetY);
              this.setState({
                  x:0,
                  y:0,
                isDrawing:false
              })
            }
          };
        
    
    drawLine=(context, x1, y1, x2, y2)=> {
      context.beginPath();
      context.strokeStyle = 'black';
      context.lineWidth =3;
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
      context.closePath();
    }
    
    render() {
      console.log(this.state.x,this.state.y)
       
        return (
            <div className="mb-1">
                <button onClick={this.handleClick} className="btn btn-dark">Draw</button>
            </div>
        )
    }
}
export default Draw