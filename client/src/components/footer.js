import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                            <h5 class="white-text">Footer Content</h5>
                            <p class="grey-text text-lighten-4">Feeding your plant love since 2018</p>
                            <div className="sharethis-inline-share-buttons"></div>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2018 Copyright Plant Team
              </div>
                </div>
            </footer>
        )
    }
}

export default Footer;