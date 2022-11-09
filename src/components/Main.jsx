import React, { Component } from 'react';
import Loader from '../layouts/Loader';
import '../style/main.css';
class Main extends Component {
   
   

    render() {
        const {posts} = this.props;
        if(!posts.length){
            return <Loader />
        }
        return (
            <div className='main'>
                {
                    posts.length && posts.map((val,ind)=>{
                        return(
                            <div className='content' key={val.imdbID} >
                                <img src={val.Poster} alt="img" style={{width:'200px',height:"200px"}} />
                                <h5>{val.Title}</h5>
                            </div>
                        )
                    }) 
                }
            </div>
        );
    }
}



export default Main;