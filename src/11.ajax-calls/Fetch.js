import React, { Component } from 'react'
import axios from 'axios'

export class Fetch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos: []
        }
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(res => res.json())
        // .then(data => this.setState({todos: data}))

        axios('https://jsonplaceholder.typicode.com/todos')
        .then(res => this.setState({todos: res.data}))

        axios("https://api.github.com/users/UmamaheshMaxwell")
        .then(res => console.log(res.data))

        fetch('http://localhost:4321/')
        .then(res => res.json())
        .then(data => console.log(data))

    }
    
    // render() {
    //     const todoList = this.state.todos.map(todo =>(
    //         <ul key={todo.id}>
    //             <li>{todo.title}</li>
    //         </ul>
    //     ))
    //     return (
    //         <div className="container">
    //             <h1>Todo List</h1>
    //             {todoList}
    //         </div>
    //     )
    // }

    render() {
        return (
            <div className="container">
                <h1>Todo List</h1>
                {
                    this.state.todos.map(todo =>(
                        <ul key={todo.id}>
                            <li>{todo.title}</li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}

export default Fetch
