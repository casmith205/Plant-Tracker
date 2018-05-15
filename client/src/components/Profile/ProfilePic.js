import React, { Component } from "react";

class ProfilePic extends Component {
    render() {
        return (
            <div class="row">
                <div class="col s12 m10">
                    <div class="card">
                        <div class="card-image">
                            <img src={require('../../images/profpic.jpg')} alt="profile" />
                        </div>
                        <div class="card-content center-align">
                            <p>I am a gnome profile picture</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilePic;

