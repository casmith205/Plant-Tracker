import React, { Component } from "react";



export const AddPlantIcon = props => (

    <div>
        <div>
            <a className="waves-effect waves-light btn modal-trigger" href="#addPlantModal"><i className="large material-icons">add_circle_outline</i></a>
        </div>
        <div id="addPlantModal" className="modal">
            <div className="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Search</a>
            </div>
        </div>

        {/* <h1>{props.name}</h1> */}



    </div>
)

