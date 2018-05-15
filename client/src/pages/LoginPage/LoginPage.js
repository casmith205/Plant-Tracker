import React, { Component } from "react";
import API from "../../utils/API";
import { Link, withRouter } from "react-router-dom";
import Input from '../../components/Login/Input'
import styles from './LoginPage.css';
import RegistrationPage from "../RegistrationPage/RegistrationPage";

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
        API.loginUser({
            userName: this.state.userName,
            password: this.state.password
        })
            .then(res => {
                console.log(res.data)
                sessionStorage.setItem("userID", res.data.id)
                this.props.history.push({
                    pathname:"/profile",
                })
        })
            
            .catch(err => console.log(err));

    };

    render() {
        return (
            <main>
            <div id="loginpage" className="content">
                <div className="container">
                    <div className="row" id="topnav">
                    </div>
                    <div className="row" id="loginbox">
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
                                    href="/registration"
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
            </div>
            </main>
        )
    }
}

export default withRouter(LoginPage);
