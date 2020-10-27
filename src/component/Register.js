import React, { Component } from "react";

export default class Register extends Component {
    state = {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

    }


    render() {
        // console.log(this.state);
        return (
            <form className='container bg-light rounded mt-2 p-2' onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name='firstName' onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name='lastName' onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name='email' onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name='password' onChange={this.handleChange} />
                </div>

                <button type="button" className="btn btn-primary btn-block" onClick={() => this.props.registerUser(this.state.user)}>Sign Up</button>
                 <p className="forgot-password text-right">
                    Already registered <a href="register">sign in?</a>
                </p>
            </form>
        );
    }
}