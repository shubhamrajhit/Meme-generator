import React from 'react'

function textsecond(props) {
    return (
        <div className="mt-3 input-group">
        <input type="text" class="form-control text" onChange={props.secondTextItem} />
        <div class="input-group-append">
                <span class="input-group-text"><i class="fa fa-cog fa-1x" aria-hidden="true" onClick={props.textSdisplay}></i></span>
        </div>
        
    </div>
    )
}
export default textsecond