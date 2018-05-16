import React, { Component } from "react";

class UploadImage extends Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {  
      return (
        
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <div className="row">
            <input className="col s6 fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
              </div>
              <div className="row">
            <button className="col s6 submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
                </div>
          </form>
      )
    }
  }
    
export default UploadImage;