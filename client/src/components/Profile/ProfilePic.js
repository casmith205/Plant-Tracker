import React, { Component } from "react";
import UploadImage from "../Profile/UploadImage";

class ProfilePic extends Component {

    render() {
        return (
            <div className="row">
                <div className="col s12 m10">
                    <div className="card">
                        <div className="card-image">
                            <img src={require('../../images/profpic.jpg')} alt="profile" />
                        </div>
                        <div className="card-content center-align">
                            <UploadImage />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilePic;

