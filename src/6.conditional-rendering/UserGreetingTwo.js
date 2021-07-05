/*
    ? Element Variables
*/

import React, { Component } from 'react'

export class UserGreetingTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }
    
    render() {
        let message;
        if(this.state.isLoggedIn){
            message = <div><h2>Welcome Uma</h2></div>
        } else {
            message = <div><h2>Welcome Guest</h2></div>
        }
        return <div>{message}</div>
    }
}

export default UserGreetingTwo
