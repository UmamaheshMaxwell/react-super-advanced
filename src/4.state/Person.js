import React, { Component } from 'react'

export class Person extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Uma',
             city: 'Hyderabad',
             isActive: true
        }
    }
    
    render() {
        const {name, city, isActive} = this.state;
        return (
            <div>
                <h1>His name is {name}</h1>
                <h1>He is from {city}</h1>
                <h1>He is Actively coding in react : {isActive ? "True": "False"}</h1>
            </div>
        )
    }
}

export default Person
