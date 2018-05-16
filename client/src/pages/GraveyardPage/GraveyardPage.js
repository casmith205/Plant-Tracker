import React, { Component } from "react";
import { Tombstone } from "../../components/Graveyard/";
import API from "../../utils/API";
import styles from './GraveyardPage.css';
import Draggable, { DraggableCore } from 'react-draggable'; //draggable

class GraveyardPage extends Component {

    render() {
        return (
            <main>

                <div id="graveyardpage" className="content">
                    <h1>Welcome to the spooooooooky graveyard</h1>
                    <Tombstone
                        name="tombstone"
                    />
                </div>

            </main>
        )
    }
}

export default GraveyardPage;