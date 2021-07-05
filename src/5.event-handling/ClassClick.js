import React, { Component } from 'react'

export class ClassClick extends Component {
    
    callMe(){
        console.log('Button is clicked')
    }

    render() {
        return (
            <div className="container">
            <h1>Event handling using Class</h1>
            <button className="btn btn-primary" onClick={this.callMe}>Click</button>
        </div>
        )
    }
}

export default ClassClick
