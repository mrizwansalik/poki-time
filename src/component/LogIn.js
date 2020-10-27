import React, { Component } from "react";
import './login.css'
import { NavLink } from 'react-router-dom'

export default class Login extends Component {

    state = {
        user: {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {

        this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value } })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)

    }
    render() {
        console.log(this.state)
        return (
            <form className='container bg-light rounded mt-2 p-2 ' onSubmit={this.handleSubmit} >
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="button" className="btn btn-primary btn-block" onClick={() => this.props.loginUser(this.state.user)}>Login</button>
                <button className='btn btn-primary m-2 p-2'><NavLink to='/register' className='text-light '>Registeration</NavLink></button>
                <p className="forgot-password text-right">

                    Forgot <a href="login">password?</a>
                </p>
            </form>
        );
    }
}