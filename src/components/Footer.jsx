import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return ( 
            <footer className="page-footer" style={{background:'rgb(205, 132, 14)'}}>
                <div className="container">
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        );
    }
}


export default Footer;