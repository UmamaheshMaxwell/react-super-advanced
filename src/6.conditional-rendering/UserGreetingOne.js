/*
    ? If/else Conditional operator
*/
import React, { Component } from 'react'

export class UserGreetingOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        if(this.state.isLoggedIn) {
            return (
                <div>
                    <h2>Welcome Uma</h2>
                </div>
            )
        } else {
            return (
                <div>
                   <h2>Welcome Guest</h2>
                </div>
            )
        }

    }
}

export default UserGreetingOne
