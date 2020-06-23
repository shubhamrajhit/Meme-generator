import React, { Component } from 'react'

class fontSize extends Component {
    state={
        Fontsize:null
    }

    // handleChange=(e)=>{
    //     this.setState({
    //         ...this.state,
    //         textFont:e.target.value
    //     });
    //   }
    handleChange=(e)=>{
        var lang =e.target.value;
        this.props.handleFontSize(lang)
    }
   
    render(){
        console.log(this.state.textFont)
        
        return (
            <div className="mt-2 ml-2">
                <select id="input-fontsize" value={this.state.selected}  onChange={this.handleChange}>
                    <option value="10px">10px</option>      
                    <option value="12px">12px</option>
                    <option value="14px">14px</option>
                    <option value="16px">16px</option>
                    <option value="18px">18px</option>
                    <option value="20px">20px</option>
                    <option value="22px">22px</option>
                    <option value="24px">24px</option>
                    <option value="26px">26px</option>
                    <option value="28px">28px</option>
                    <option value="30px">30px</option>
                    <option value="32px">32px</option>
                    <option value="34px">34px</option>
                    <option value="36px">36px</option>
                    <option value="38px">38px</option>
                    <option value="40px">40px</option>
                    <option value="42px">42px</option>
                    <option value="44px">44px</option>
                    <option value="46px">46px</option>
                    <option value="48px">48px</option>
                    <option value="50px">50px</option>
                    <option value="52px">52px</option>
                </select>
               
                
            </div>
        )
    }
}
export default fontSize
