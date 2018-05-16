import React, { Component } from "react";
import API from "../../utils/API";
import { Link, withRouter } from "react-router-dom";
import Input from '../../components/Login/Input'
import styles from './LoginPage.css';
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import videoBG from "../../images/homepage.mp4"

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
                console.log("set userid ", res.data.id)
                sessionStorage.setItem("userID", res.data.id)
                this.props.history.push({
                    pathname: "/profile",
                })
                console.log(this.state);
                this.props.history.push("/profile")
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <main>
                <video className='videoTag' id="videobg" autoPlay muted>
                    <source src={videoBG} type='video/mp4' />
                </video>
                <div id="loginpage" className="content">
                    <div className="container">
                        <div className="row" id="topnav">
                        </div>

                        <div className="row" id="loginbox">
                            <h4 className="white-text left-align">How do trees get on the internet?</h4>
                            <form className="col s12">
                                <div className="row">
                                    <Input
                                        name="userName"
                                        value={this.state.userName}
                                        onChange={this.handleInputChange}
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="row">
                                    <Input
                                        name="password"
                                        type="password"
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
                                    ><i className="material-icons right">send</i>
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
                            <h4 className="white-text right">They "LOG" in!</h4>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default withRouter(LoginPage);
