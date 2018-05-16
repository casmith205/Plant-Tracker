import React from "react";



export const AddPlantIcon = props => (

    <div>
        <div>
            <a className="waves-effect waves-light btn modal-trigger" href="#addPlantModal"><i className="large material-icons">add_circle_outline</i></a>
        </div>
        <div id="addPlantModal" className="modal">
            <div className="modal-content">
                <h4>Add a new plant to your family</h4>
            </div>

            <div className="row">
                <div className="input-field col s8">
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
        </div >

    </div >
)

