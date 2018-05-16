import React, { Component } from "react";
import UploadImage from "../Profile/UploadImage";

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
                            <UploadImage />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilePic;

