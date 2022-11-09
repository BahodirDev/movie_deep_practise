import React, { Component } from 'react';
import '../style/search.css';

class Search extends Component {
    
    state={
        search:"",
        page:1
    }

    getValue=(arg)=>{
        this.setState({search:arg.target.value})
    }
    setDate=()=>{
        if(this.state.search){
            this.props.getFilter(this.state.search)
        }
    }

    setDate2=(item)=>{
        if(this.state.search){
            this.props.getFilter2(this.state.search,item)
        }
    }

    render() {
        return (
            <div className='search'> 
            <div>
                <input type="search" 
                value={this.state.search} 
                onChange={(arg)=>this.getValue(arg)}
                placeholder="Search..."
                
                />
                <button id='btn_search' className='btn' style={{background:"rgb(205, 132, 14)",color:"black"}} onClick={this.setDate}>Search</button>
            </div>
            <div className='btn_filter'>
                <button value={'1'}className="btn btn-primary"  onClick={(value)=>this.setDate2(value.target.value)}> 1</button>
                <button value={'2'}className="btn btn-primary"  onClick={(value)=>this.setDate2(value.target.value)}> 2</button>
                <button value={'3'}className="btn btn-primary"  onClick={(value)=>this.setDate2(value.target.value)}> 3</button>
                <button value={'4'}className="btn btn-primary"  onClick={(value)=>this.setDate2(value.target.value)}> 4</button>
                <button value={'5'} className="btn btn-primary" onClick={(value)=>this.setDate2(value.target.value)}> 5</button>
                <button value={'6'} className="btn btn-primary" onClick={(value)=>this.setDate2(value.target.value)}> 6</button>
            </div>
            </div>
        );
    }
}


export default Search;