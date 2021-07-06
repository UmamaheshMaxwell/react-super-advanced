import React, { Component } from 'react'

export class Student extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            email:'',
            city: '',
            is_admin: '',
            students: []
        }
    }

    componentDidMount(){
        this.getStudentData()
    }

    getStudentData(){
        fetch(`http://localhost:4321/student`)
        .then(res => res.json())
        .then(data => this.setState({students: data})) 
    }

    addStudent(){
        const requestOptions = {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                city: this.state.city,
                is_admin: this.state.is_admin
            })
        }

            fetch(`http://localhost:4321/student`, requestOptions)
            .then(res => res.json())
            .then(data => {
                this.getStudentData()
                this.clearFildes()
            })
    }

    clearFildes =() => {
        this.setState({
            name: '',
            email:'',
            city: '',
            is_admin: ''
        })
    }
    
    render() {
        return (
            <div className="container">
                <h1>Display Student List</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>IsAdmin</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" 
                                        value={this.state.name} 
                                        onChange={(event)=>{this.setState({name:event.target.value})}}
                                />
                            </td>
                            <td>
                            <input type="text" 
                                        value={this.state.email} 
                                        onChange={(event)=>{this.setState({email:event.target.value})}}
                                />
                            </td>
                            <td>
                            <input type="text" 
                                        value={this.state.city} 
                                        onChange={(event)=>{this.setState({city:event.target.value})}}
                                />
                            </td>
                            <td>
                            <input type="text" 
                                        value={this.state.is_admin} 
                                        onChange={(event)=>{this.setState({is_admin:event.target.value})}}
                                />
                            </td>
                            <td>
                                <button className="btn btn-primary"
                                        onClick={() => this.addStudent()}
                                >Add</button>
                            </td>
                            <td>
                                <button className="btn btn-warning">Update</button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(student => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.city}</td>
                                    <td>{student.is_admin?"True": "Falase"}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Student
