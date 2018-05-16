import React, { Component } from "react";
import { Tombstone } from "../../components/Graveyard/";
import API from "../../utils/API";
import styles from './GraveyardPage.css';
import Draggable, { DraggableCore } from 'react-draggable'; //draggable
import { withRouter } from "react-router-dom";

class GraveyardPage extends Component {

    componentDidMount() { 
    if (sessionStorage.getItem("userID") == undefined) {
        console.log("inside of no user ID in session");
        this.props.history.push({
            pathname: "/",
        })
        }
    }

    render() {
        return (
            <main>

                <div id="graveyardpage" className="content">
                    <h2 className="center-align" id="graveyardtitle">Welcome to the spooooooooky graveyard</h2>
                    <h4 className="center-align" id="graveyardtitle">Where plants go to rest... for good...</h4>
                    <Tombstone
                        name="tombstone"
                    />
                </div>

            </main>
        )
    }
}

export default GraveyardPage;