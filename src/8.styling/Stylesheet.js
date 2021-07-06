import React from 'react'
import StylesheetTwo from './StylesheetTwo'
import './styling.css'



function Stylesheet() {
    const colorName='primary';
    return (
        // <React.Fragment>
        //     <StylesheetTwo primary="primary-1"/>
        // </React.Fragment>
        <React.Fragment>
            <h2 className={`primary enlarge-text`}> Using Stylesheets</h2>
        </React.Fragment>
        // <React.Fragment>
        //     <h2 className={`${colorName} enlarge-text`}> Using Stylesheets</h2>
        // </React.Fragment>
    )
}

export default Stylesheet
