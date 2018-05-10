import React from "react";
import "./LoginPage.css";

const LoginPage = props => {
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

export default LoginPage;