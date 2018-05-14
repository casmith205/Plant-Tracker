import React from "react";

// openSearch = () => {

// }

export const AddPlantIcon = props => (
    <div>
        <a class="waves-effect waves-light btn modal-trigger" href="#addplanticon"><i class="large material-icons">add_circle_outline</i></a>
        {/* <!-- Modal Structure --> */}
            <div id="addplanticon" class="modal">
                <div class="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        
        {/* <h1>{props.name}</h1> */}
    </div>
)