/*
    ? Ternary Conditional Operator
*/

import React, { Component } from 'react'

export class UserGreetigThree extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {
        return (
                this.state.isLoggedIn ? 
                <div><h2>Welcome Uma</h2></div> : 
                <div><h2>Welcome Guest</h2></div>
        )
    }
}

export default UserGreetigThree
