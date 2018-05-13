import React, { Component } from "react";
import { DeadPlantInfo, Tombstone } from "../../components/Inside/";
import API from "../../utils/API";

class GraveyardPage extends Component {


    render() {
        return (
            <div id="graveyardpage">
                <h1>Welcome to the spooooooooky graveyard</h1>
                <Tombstone />
            </div>

            //     {/* //call gravestone on click
            //     //call hover modal on hover */}
            // </div>
        )
    }
}

export default GraveyardPage;