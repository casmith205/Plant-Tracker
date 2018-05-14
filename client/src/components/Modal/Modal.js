import React from "react";

export const Modal = props => (
  <div>
    <div>
    {/* // <!-- Modal Trigger --> */}
      <a className="waves-effect waves-light btn modal-trigger" href="#signUp">Modal</a>
    </div>
    {/* // <!-- Modal Structure --> */}
    <div id="signUp" className="modal">
      <div className="modal-content">
        <h4>srgre</h4>
        <p>bgdrbd</p>
      </div>
    </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat"{...props}>Sign Up</a>
      </div>
  </div>
);

export default Modal;
