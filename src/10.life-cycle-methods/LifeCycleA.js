import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
  
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <LifeCycleB />
            </div>
        )
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
}

export default LifeCycleA
