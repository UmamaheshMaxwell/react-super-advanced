import React, { Component } from 'react'

export class EventBindTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
    }

    clickHandler(value){
        console.log(value)
        this.setState({
            message: 'Thank you'
        })
    }
    
    render() {
        return (
            <div className="container">
                <h1>{this.state.message}, Event Binding using Fat Arrow Functions</h1>
                <button className="btn btn-primary"
                        onClick={() => this.clickHandler('Hello')}
                >
                Click Me</button>
            </div>
        )
    }
}

export default EventBindTwo
