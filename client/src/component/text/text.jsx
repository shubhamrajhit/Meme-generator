import React from 'react'

function text(props)  {
        return (
            <div className="input-group mt-3">
                <input type="text" class="form-control text" onChange={props.FirstTextItem} placeholder
                ="@...kids bro" />
                <div className="input-group-append">
                    <span className="input-group-text"><i className="fa fa-cog fa-1x" aria-hidden="true" onClick={props.textdisplay}></i></span>
                </div>
                
            </div>
        )
}
export default text