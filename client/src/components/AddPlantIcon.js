import React, { Component } from "react";



export const AddPlantIcon = props => (

    <div>
        <div>
            <a className="waves-effect waves-light btn modal-trigger" href="#addPlantModal"><i className="large material-icons">add_circle_outline</i></a>
        </div>
        <div id="addPlantModal" className="modal">
            <div className="modal-content">
                <h4>Add a new plant to your family</h4>
                <p>A bunch of text</p>
            </div>
            <div class="input-field col s12">
                <select>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <label>Materialize Select</label>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">ADD!</a>
            </div>
        </div>

    </div>
)

