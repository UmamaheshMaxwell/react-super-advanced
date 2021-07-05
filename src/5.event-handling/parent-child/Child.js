import React, { Component } from 'react'

export class Child extends Component {
    render() {
        const {name, callParent} = this.props
        return (
            <div>
                <h1>This is Child Component It is trying to call function from {name}</h1>
                <button className="btn btn-primary" 
                        onClick={() => callParent('ChildComponent')}
                >Call Parent</button>
            </div>
        )
    }
}

export default Child
