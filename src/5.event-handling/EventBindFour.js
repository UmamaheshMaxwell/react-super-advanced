import React, { Component } from 'react'

export class EventBindFour extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:'Uma',
             message: "Hello"
        }
    }

    clickHandler = (event, one, two) => {
        console.log(event, one, two)
        console.log(this)
        this.setState({
            message: 'Thank you'
        })
    }

    getMessage(){
        console.log('Hey here is the message for you')
    }
    
    render() {
        return (
            <div className="container">
                <h1>Event Binding using fat arrow function : { this.state.name}</h1>
                <button className="btn btn-primary" onClick={this.clickHandler}>
                
                Click Me</button><br /><br />
                <button className="btn btn-primary" 
                        onClick={(event)=>{this.clickHandler(event, 'one','two')}}>
                Click Again</button>

                <button onClick={this.getMessage}>Get Message</button>
            </div>
        )
    }
}

export default EventBindFour
