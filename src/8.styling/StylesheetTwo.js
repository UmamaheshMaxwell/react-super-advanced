import React from 'react'

function StylesheetTwo(props) {
    let className= props.primary && props.primary==="primary"? "primary": 'no-class'
    return (
        <React.Fragment>
            <h1 className={className}>Using Stylesheet</h1>
        </React.Fragment>
    )
}

export default StylesheetTwo
