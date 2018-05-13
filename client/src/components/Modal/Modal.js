import React from "react";

const Modal = props => (
  // <!-- Modal Trigger -->
  <a class="waves-effect waves-light btn modal-trigger" href="#signUp">Modal</a>

  // <!-- Modal Structure -->
  <div id="signUp" class="modal">
    <div class="modal-content">
      <h4></h4>
      <p><p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat"{...props}>Sign Up</a>
    </div>
  </div>
);

export default Modal;
