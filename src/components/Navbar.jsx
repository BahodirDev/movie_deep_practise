import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper " style={{background:'rgb(215, 150, 14)'}}>
                    <a href="#" className="brand-logo " >Movie API</a>
                </div>
            </nav>
        );
    }
}


export default Navbar;