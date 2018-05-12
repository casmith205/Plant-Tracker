import React, {Component} from "react";

class ProfilePic extends Component {
    render () {
        return (
    <div>
        <div>
            <img src={require('../../images/profpic.jpg')} alt="profile" />
            
        </div>
    </div> 
)}
}

export default ProfilePic;