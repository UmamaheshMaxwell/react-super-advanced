import React, { Component } from 'react'

export class Welcome extends Component {
    
    render() {
        return (
            <div>              
                <h2>Developer name : {this.props.name} and Skill : {this.props.skill}</h2>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Welcome
