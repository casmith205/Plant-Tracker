import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import './RegistrationPage.css';
import Input from '../../components/Login/Input'

class RegistrationPage extends Component {
    state = {
        userName: "",
        password: "",
        email: "",
        cellPhone: "",
        address: "",
        zipCode: "",
        goodInfo: true
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        //console.log("name: ", name, "value: ", value)
        //console.log(event.target)
        this.setState({
            [name]: value
        })
    }

    handleRegSubmit = event => {
        event.preventDefault();
        //console.log("Hello I am signing up!");
        //console.log(this.state.userName);
        API.registerUser({
            userName: this.state.userName,
            password: this.state.password,
            email: this.state.email,
            cellPhone: this.state.cellPhone,
            address: this.state.address,
            zipCode: this.state.zipCode
        })
            .then(res => {
                //console.log("signed up!");
                //console.log(res)
                //console.log("set userid ", res.data.id)
                sessionStorage.setItem("userID", res.data.id)
                this.props.history.push({
                    pathname: "/profile",
                })
                //console.log(this.state);
            })
            .catch(err => { 
                let errArray=err.response.data.errors
                
                errArray.forEach(function (error) {
                    let inputID=document.getElementById(error.path).getAttribute("name")
                    console.log("error path", error.path)
                    console.log("input name", inputID)
                    if (error.path == inputID) {
                        document.getElementById(error.path).setAttribute("class", "invalid");
                    }
                })
                window.M.toast({html: 'Please fix fields underlined in red'})
            })
    };

    render() {
        return (
            <div id="regpage">
                <div className="container">
                    <div className="row" id="topnav">
                    </div>
                    <div className="row" id="loginbox">
                        <form className="col s12">
                            <div className="row" id="reginput">
                                <i className="material-icons prefix col s1">account_box</i>
                                <div className="col s10">
                                    <Input
                                        id="userName"
                                        name="userName"
                                        value={this.state.userName}
                                        onChange={this.handleInputChange}
                                        placeholder="Username"
                                        
                                    />
                                </div>
                            </div>
                            <div className="row" id="reginput">
                                <i className="material-icons prefix col s1">lock_outline</i>
                                <div className="col s10">
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="row" id="reginput">
                                <i className="material-icons prefix col s1">email</i>
                                <div className="col s10">
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        placeholder="Email"
                                        
                                    />
                                </div>
                            </div>
                            <div className="row" id="reginput">
                                <i className="material-icons prefix col s1">phone</i>
                                <div className="col s10">
                                    <Input
                                        id="cellPhone"
                                        name="cellPhone"
                                        value={this.state.cellPhone}
                                        onChange={this.handleInputChange}
                                        placeholder="Cell Phone Number"
                                    />
                                </div>
                            </div>
                            <div className="row" id="reginput">
                                <i className="material-icons prefix col s1">contact_mail</i>
                                <div className="col s10">
                                    <Input
                                        id="address"
                                        name="address"
                                        value={this.state.address}
                                        onChange={this.handleInputChange}
                                        placeholder="Address"
                                    />
                                </div>
                            </div>
                            <div className="row" id="reginput">
                                <i className="material-icons prefix col s1">add_location</i>
                                <div className="col s10">
                                    <Input
                                        id="zipCode"
                                        name="zipCode"
                                        value={this.state.zipCode}
                                        onChange={this.handleInputChange}
                                        placeholder="Zip Code"
                                    />
                                </div>
                            </div>
                            <div className="col s6 offset-s6">
                                <a
                                    onClick={this.handleRegSubmit}
                                    type="success"
                                    className="input-lg waves-effect waves-light btn"
                                ><i class="material-icons right">send</i>
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