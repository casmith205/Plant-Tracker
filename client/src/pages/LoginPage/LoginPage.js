import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Input from '../../components/Login/Input'
import styles from './LoginPage.css';

class LoginPage extends Component {
    state = {
        user: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleLoginSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.userpassword) {
            API.loginUser({
                username: this.state.username,
                password: this.state.password
            })
                .then(res => this.handleUserLogin())
                .catch(err => console.log(err));
        }
    };

    handleLoginSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.userpassword) {
            API.registerUser({
                username: this.state.username,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname
            })
                .then(res => this.handleUserLogin())
                .catch(err => console.log(err));
        }
    };

    // handleUserLogin = event => {

    // }

        // Will need to add some helper on this but I don't know how to do this.
        // handleHelpSubmit = event => {
        //     event.preventDefault();
        //     if (this.state.username && this.state.userpassword) {
        //         API.loginUser({
        //             username: this.state.username,
        //             password: this.state.password
        //         })
        //             .then(res => this.handleUserLogin())
        //             .catch(err => console.log(err));
        //     }
        // };

    render() {
        return (
            <div className="container">
                <div className="row" id="topnav">
                </div>
                <div id="loginpage" className="row">
                    <form className="col s12">
                        <div className="row">
                            <Input
                                name="userlogin"
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                placeholder="Username"
                            />
                        </div>
                        <div class="row">
                            <Input
                                name="userlogin"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            placeholder="Password"
                            />
                        </div>
                        <div className="col s6">
                            <a
                                onClick={this.handleFormSubmit}
                                type="success"
                                className="input-lg waves-effect waves-light btn"
                            >
                                Login
                            </a>
                        </div>
                        <div className="col s6">
                            <a
                                onClick={this.handleFormSubmit}
                                type="success"
                                className="input-lg waves-effect waves-light btn"
                            >
                                Signup
                            </a>
                        </div>
                        {/* <div className="col s6">
                            <a
                                onClick={this.handleHelpSubmit}
                                type="success"
                                className="input-lg waves-effect waves-light btn"
                            >
                                Help Logging In
                            </a>
                        </div> */}
                    </form>
                </div>
            </div>
            )
        }
    }

export default LoginPage;