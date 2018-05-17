import React, { Component } from "react";
import { Tombstone } from "../../components/Graveyard/";
import API from "../../utils/API";
import './GraveyardPage.css';
// import Draggable, { DraggableCore } from 'react-draggable'; //draggable
// import { withRouter } from "react-router-dom";

let userId = sessionStorage.getItem('userID');


class GraveyardPage extends Component {
    state = {
        deadPlants: [],
        userId: userId
        // error: ""
    };


    loadDeadPlants = () => {
        console.log(this.state.userId)
        API.getPlants(this.state.userId)
            .then(res => {
                let deadPlantArr = []
                console.log(res.data)
                for (var i = 0; i < res.data.length; i++) {
                    // console.log(res.data[i].type)
                    if (res.data[i].status === "dead") {
                        deadPlantArr.push(res.data[i])
                    }
                }
                // console.log("array",deadPlantArr)
                this.setState({ deadPlants: deadPlantArr })
                console.log("array in state", this.state.deadPlants)
                // this.setState({deadPlants: res.data})
            })
    }

    componentDidMount() { 
    if (sessionStorage.getItem("userID") == undefined) {
        console.log("inside of no user ID in session");
        this.props.history.push({
            pathname: "/",
        })
        }
        this.loadDeadPlants()
    }

    componentDidUpdate() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = window.M.Dropdown.init(elems);
    }

    render() {
        return (
            <main>

                <div id="graveyardpage" className="content">
                    <h2 className="center-align" id="graveyardtitle">Welcome to the spooooooooky graveyard</h2>
                    <h4 className="center-align" id="graveyardtitle">Where plants go to rest... for good...</h4>
                    {this.state.deadPlants.map(plant => (
                    <Tombstone
                        key={plant.id}
                        plantId={plant.id}
                        plantName={plant.plantName}
                        type={plant.type}
                        status={plant.status}
                        born={plant.createdAt}
                        died = {plant.updatedAt}
                    />
                ))}
                </div>

            </main>
        )
    }
}

export default GraveyardPage;