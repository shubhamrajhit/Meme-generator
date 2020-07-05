import React from 'react'

function textsecond(props) {
    return (
        <div className="mt-3 input-group">
        <input type="text" class="form-control text bg-dark" id="2" onChange={props.secondTextItem} placeholder="write on meme..." />
        <div class="input-group-append">
                <span class="input-group-text bg-dark"><i class="fa fa-cog fa-1x" aria-hidden="true" onClick={props.textSdisplay}></i></span>
        </div>
        
    </div>
    )
}
export default textsecond