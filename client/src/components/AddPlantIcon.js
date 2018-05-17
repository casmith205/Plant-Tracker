import React from "react";
import styles from "./AddPlantIcon.css";


export const AddPlantIcon = props => (

    <div>
        <div>
            <a id="addplantbuttonbg" className="waves-effect waves-light btn-floating btn-large modal-trigger" href="#addPlantModal"><i id="addplantbutton" className="large material-icons">add</i></a>
        </div>
        <div id="addPlantModal" className="modal">
        <div className="container" id="addplantcontainer">
        <div className="row">
            <div className="col s12 modal-content">
                <h4>Add a new plant to your family</h4>
            </div>
            </div>

            <div className="row">
                <div className="input-field col s12">
                    <textarea
                        id="plantInput"
                        name="plantName"
                        className="materialize-textarea"
                        onChange = {props.handleInputChange}
                    />
                    <label>Plant Name</label>
                    <span className="helper-text"
                        data-error="wrong"
                        data-success="right">
                        Ex: Basil, Poppy, Tulip ...</span>
                </div>
            </div>

            {/* <div className="row">
                <div className="input-field col s8">
                    <select>
                        <option value="" disabled defaultValue>Does your plant live inside or roam free?</option>
                        <option value="indoor">Indoor</option>
                        <option value="outdoor">Outdoor</option>
                    </select>
                </div>
            </div>  */}
            <div className="modal-footer row">
                <a href="#!" 
                className="modal-close pulse btn-floating btn-large col s2"
                onClick = {props.handleFormSubmit}>ADD</a>
            </div>
            </div>
        </div >

    </div >
)

