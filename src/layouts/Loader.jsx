import React, { Component } from 'react';
import './loader.css'

class Loader extends Component {


    render() {
        return (
            <div className='loader_div'>
                <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        );
    }
}



export default Loader;