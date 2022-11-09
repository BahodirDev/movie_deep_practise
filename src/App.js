import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Eror from './layouts/Eror';

class App extends React.Component {


  state = {
    posts: [],
    isFalse: true
  }


  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=b5a308d7&s=avengers`)
      .then(data => data.json())
      .then(data2 => {
        this.setState({ posts: data2.Search })
      })
  }

  getFilter = (search) => {
    fetch(`http://www.omdbapi.com/?apikey=b5a308d7&s=${search}`)
      .then(data => data.json())
      .then(data2 => {
        if (typeof data2.Search === 'undefined') {
          this.setState({ isFalse: false })
        } else {
          this.setState({ posts: data2.Search })
        }
      })
  }
  getFilter2 = (search,page) => {
    console.log(page);
    console.log(search);
    fetch(`http://www.omdbapi.com/?apikey=b5a308d7&s=${search}&page=${page}`)
      .then(data => data.json())
      .then(data2 => {
        if (typeof data2.Search === 'undefined') {
          this.setState({ isFalse: false })
        } else {
          this.setState({ posts: data2.Search })
        }
      })
  }




  render() {
    return (
      <div className="App">
        {
          this.state.isFalse === false ? <Eror /> :
            <>
              <Navbar />
              <Search 
              getFilter={this.getFilter} 
              getFilter2={this.getFilter2}
              />
              <Main posts={this.state.posts} />
              <Footer />
            </>
        }
      </div>
    );
  }

}

export default App;
