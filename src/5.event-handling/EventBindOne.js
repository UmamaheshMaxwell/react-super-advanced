import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
    }

    clickHandler(event){
        console.log(event)
        this.setState({
            message: 'Thank you'
        })
    }
    
    render() {
        return (
            <div className="container">
                <h1>{this.state.message}, Event Binding using bind method</h1>
                <button className="btn btn-primary"
                        onClick={this.clickHandler.bind(this)}
                >
                Click Me</button>
            </div>
        )
    }
}

export default EventBind
