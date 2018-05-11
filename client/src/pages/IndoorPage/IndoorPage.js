import React from "react";
import JokeContainer from "../../components/Inside/JokeContainer";
import NavBar from "../../components/NavBar";
import PottedPlants from "../../components/Inside/PottedPlants"

const IndoorPage = props => {
    <div>
        // Share buttons
        <div className="sharethis-inline-share-buttons"></div>
        <PottedPlants />
        <JokeContainer />
    </div>
}

export default IndoorPage;