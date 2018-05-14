import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import styles from './RegistrationPage.css';
import Input from '../../components/Login/Input'

class RegistrationPage extends Component {
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
        console.log("name: ", name, "value: ", value)
        console.log(event.target)
        this.setState({
            [name]: value
        })
    }

    handleRegSubmit = event => {
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
            <div id="regpage">
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
                            <div class="row">
                                <Input
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    placeholder="Email"
                                />
                            </div>
                            <div class="row">
                                <Input
                                    name="cellPhone"
                                    value={this.state.cellPhone}
                                    onChange={this.handleInputChange}
                                    placeholder="8001236789"
                                />
                            </div>
                            <div class="row">
                                <Input
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.handleInputChange}
                                    placeholder="123 ICanGrow Rd"
                                />
                            </div>
                            <div class="row">
                                <Input
                                    name="zipCode"
                                    value={this.state.zipCode}
                                    onChange={this.handleInputChange}
                                    placeholder="55123"
                                />
                            </div>
                            <div className="col s6">
                                <a
                                    onClick={this.handleRegSubmit}
                                    type="success"
                                    className="input-lg waves-effect waves-light btn"
                                >
                                    Signup
                            </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegistrationPage;