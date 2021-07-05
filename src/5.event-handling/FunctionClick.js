import React from 'react'

function FunctionClick() {

    function callMe(){
        console.log('Button is Clicked')
    }


    return (
        <div className="container">
            <h1>Event handling</h1>
            <button className="btn btn-primary" onClick={callMe}>Click</button>
        </div>
    )
}

export default FunctionClick
