import React , {Component } from 'react'
import ImageList from './imageList'


class FeatureImg extends Component{
    state={
        images:[],
        img:null

    }
    async componentDidMount(){
        const url='https://api.imgflip.com/get_memes'
        const response=await fetch(url);
        const data=await response.json();
        const images=data.data.memes
        this.setState({
            images:images
        })
    }
   
    displayimage=(img)=>{
        this.setState({
            ...this.state,
            img:img
        })
        this.props.selectedimg(this.state.img)
     }
    render(){
        
        
        
    
        return (
           
            <div>
                <ImageList images={this.state.images} finalimg={this.displayimage}/>
            </div>
            
                    
                    
            
        )
        }
}
export default FeatureImg

