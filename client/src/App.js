import React, { Component } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Search from './components/Search';
import Results from './components/Results';
class App extends Component {
  render() {
    return (
    
      <div>

      <Jumbotron/>

       <Search/> 
       
       <Results/> 

      <Footer/>

    </div>
    );
  }
}

export default App;
