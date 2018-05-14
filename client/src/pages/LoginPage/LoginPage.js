import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Input from '../../components/Login/Input'
import styles from './LoginPage.css';

class LoginPage extends Component {
    state = {
        userName: "",
        password: "",
        email: "",
        cellPhone: "",
        address: "",
        zipCode: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleLoginSubmit = event => {
        event.preventDefault();
        console.log("Hello I am logging in!");
        console.log(this.state);
        console.log(this.state.userName);
        API.loginUser({
            userName: this.state.userName,
            password: this.state.password
        })
            .then(res => console.log("logged in!"))
            .catch(err => console.log(err));

    };

    handleSignUpSubmit = event => {
        event.preventDefault();
        console.log("Hello I am signing up!");
        console.log(this.state);
        console.log(this.state.userName);
        API.registerUser({
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email,
            cellPhone: this.state.cellPhone,
            address: this.state.address,
            zipCode: this.state.zipCode
        })
            .then(res => console.log("signed up!"))
            .catch(err => console.log(err));
    };


    render() {
        return (
            <div className="container">
                <div className="row" id="topnav">
                </div>
                <div id="loginpage" className="row">
                    <form className="col s12">
                        <div className="row">
                            <Input
                                name="userName"
                                value={this.state.userName}
                                onChange={this.handleInputChange}
                                placeholder="Username"
                            />
                        </div>
                        <div class="row">
                            <Input
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                placeholder="Password"
                            />
                        </div>
                        <div className="col s6">
                            <a
                                onClick={this.handleLoginSubmit}
                                type="success"
                                className="input-lg waves-effect waves-light btn"
                            >
                                Login
                            </a>
                        </div>
                        <div className="col s6">
                            <a
                                onClick={this.handleSignUpSubmit}
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