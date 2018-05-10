import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./LoginPage.css";

class LoginPage extends Component {
    state = {
        user: "",
        password: ""
    };

    handleLogin = event => {
        const {name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    render() {
        <div className="container" id="loginpage">
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="userlogin" type="text" class="validate" placeholder="Username"></input>
                            <label for="userlogin">Username</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="userpassword" type="password" class="validate" placeholder="Password"></input>
                            <label for="userpassword">Password</label>
                        </div>
                    </div>
                    <a class="waves-effect waves-light btn">Login</a>
                    <a class="waves-effect waves-light btn">Help Logging In</a>
                </form>
            </div>
        </div>
    }
}

export default LoginPage;