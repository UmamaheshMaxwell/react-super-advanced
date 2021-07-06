import React, { Component } from 'react'

export class FormOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             country: '',
             gender: '',
             isActive: false
        }
    }


    submitData(event){
        event.preventDefault() // Will stop refreshing the page (submitting form)
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.isActive)
    }
    
    render() {
        return (
            <div className="container">
                <h1>Form Component - Code Refactoring</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input type="text" 
                               className="form-control w-50" 
                               value={this.state.username}
                               onChange={(event)=>this.setState({username: event.target.value})}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="">Comments</label>
                        <textarea className="form-control w-50"
                                  value={this.state.comments}
                                  onChange={(event) => this.setState({comments: event.target.value})}
                        ></textarea>
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="">Country</label>
                        <select className="form-select w-50"
                                value={this.state.country}
                                onChange={(event) => this.setState({country: event.target.value})}
                        >
                            <option value="">Select</option>
                            <option value="1">India</option>
                            <option value="2">Australia</option>
                            <option value="3">Japan</option>
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="">Gender : </label>&nbsp;&nbsp;
                        <input type="radio" 
                              className="form-check-input" 
                              name="gender"
                              value={0}
                              onChange={(event) => this.setState({gender: event.target.value})}
                        /> Male &nbsp;&nbsp;
                        <input type="radio" 
                               className="form-check-input" 
                               name="gender"
                               value={1}
                               onChange={(event) => this.setState({gender: event.target.value})}
                        /> Female &nbsp;&nbsp;
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="">IsActive</label> &nbsp;&nbsp;
                        <input type="checkbox" 
                               className="form-check-input" 
                               value={this.state.isActive}
                               onChange={() => this.setState({isActive: !this.state.isActive})}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <button type="submit" 
                                className="btn btn-primary"
                                onClick={(event) => this.submitData(event) }
                        >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormOne
