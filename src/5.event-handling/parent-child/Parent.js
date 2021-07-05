import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {

    callParent(childName){
        console.log(`This is parent function being called from ${childName}`)
    }

    render() {
        return (
            <div>
                 <h1>This is Parent Component</h1>
                <Child callParent={this.callParent} name="Parent"/>
            </div>
        )
    }
}

export default Parent
