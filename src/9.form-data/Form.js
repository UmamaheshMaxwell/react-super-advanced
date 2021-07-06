import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div className="container">
                <h1>Form Component</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input type="text" className="form-control w-50" />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="">Comments</label>
                        <textarea className="form-control w-50"></textarea>
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="">Country</label>
                        <select className="form-select w-50">
                            <option value="">Select</option>
                            <option value="1">India</option>
                            <option value="2">Australia</option>
                            <option value="3">Japan</option>
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="">Gender : </label>&nbsp;&nbsp;
                        <input type="radio" className="form-check-input" name="gender"/> Male &nbsp;&nbsp;
                        <input type="radio" className="form-check-input" name="gender"/> Female &nbsp;&nbsp;
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="">IsActive</label> &nbsp;&nbsp;
                        <input type="checkbox" className="form-check-input" />
                    </div>
                    <br />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
