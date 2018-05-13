import React, {Component} from "react";
import JokeContainer from "../../components/Inside/JokeContainer";
import PottedPlants from "../../components/Inside/PottedPlants"

class IndoorPage extends Component {
    render() {
        return (
    
    <div>
        <div className="sharethis-inline-share-buttons"></div>
        <PottedPlants />
        <JokeContainer />
    </div>
        )}
}


export default IndoorPage;