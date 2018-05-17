import React from "react";
import "./input.css"

const Input = props => (
  <div className="input-group input-group-lg white-text">
    <input className="form-control" type="text" {...props} />
  </div>
);

export default Input;
