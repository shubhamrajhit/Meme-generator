import React from 'react'

function text(props)  {
        return (
            <div class="input-group mt-3">
                <input type="text" class="form-control text" onChange={props.FirstTextItem} />
                <div class="input-group-append">
                    <span class="input-group-text"><i class="fa fa-cog fa-1x" aria-hidden="true" onClick={props.textdisplay}></i></span>
                </div>
                
            </div>
        )
}
export default text