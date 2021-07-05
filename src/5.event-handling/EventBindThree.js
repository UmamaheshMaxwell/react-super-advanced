import React, { Component } from 'react'

export class EventBindThree extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(event, one, two){
        console.log(event, one, two)
        console.log(this)
        this.setState({
            message: 'Thank you'
        })
    }
    
    render() {
        return (
            <div className="container">
                <h1>Event Binding using constructor binding : {this.state.message}</h1>
                <button className="btn btn-primary"
                        onClick={this.clickHandler}
                >
                Click Me</button>
            </div>
        )
    }
}

export default EventBindThree
