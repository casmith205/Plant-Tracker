import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">Feeding your plant love since 2018</p>
                            <div className="sharethis-inline-share-buttons"></div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2018 Copyright Plant Team
              </div>
                </div>
            </footer>
        )
    }
}

export default Footer;