import React from "react";

const LoginPage = props => {
    <div className="container">
        <div class="row">
            <form class="col s12">
            <div class="row">
                    <div class="input-field col s12">
                        <input id="userlogin" type="text" class="validate" placeholder="Username"></input>
                        <label for="email">Username</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="userpassword" type="password" class="validate" placeholder="Password"></input>
                        <label for="password">Password</label>
                    </div>
                </div>
                <a class="waves-effect waves-light btn">Login</a>
                <a class="waves-effect waves-light btn">Help Logging In</a>
            </form>
        </div>
    </div>
}

export default LoginPage;