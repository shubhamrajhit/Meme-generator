import React, { Component } from 'react';





class socialShare extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shareOpen: "closeShare",
            toggleButtonText: "Share this"
        };
      
        this.shareOpenToggle = this.shareOpenToggle.bind(this);
    
      }
    
    shareOpenToggle() {
        if (this.state.shareOpen==="closeShare") {
            this.setState({
                shareOpen: "openShare",
                toggleButtonText: "Hide sharing options"
            });
        }else {
            this.setState({
                shareOpen: "closeShare",
                toggleButtonText: "Share this"
            });
        }   
    }
   

  render() {

  
    //URL from current page
    const url = window.location.href;
    //URL patterns for Social media sites share functionalities
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;

    return (
        <div className="socialShareContainer">
            <div>
                <button className="socialShareButton" onClick={this.shareOpenToggle}>{this.state.toggleButtonText}</button>
            </div>
            <div className={this.state.shareOpen}>
                <a href={facebookUrl} target="_blank"> <i className="fa fa-facebook-square"></i></a>
                <a href={linkedinUrl} target="_blank"><i className="fa fa-linkedin-square"></i></a>
                <a href={twitterUrl} target="_blank"> <i className="fa fa-twitter-square"></i></a>
               

            </div>           
        </div>
    );
  }
}

export default socialShare;