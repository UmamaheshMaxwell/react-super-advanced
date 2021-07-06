import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('LifeCycleB Constructor')
    }

    static getDerivedStateFromProps(){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
  
    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                
            </div>
        )
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }
}

export default LifeCycleB
