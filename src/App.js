import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Content from './components/Content';
import logo from './logo.svg';
import './App.css';
import { directive } from '@babel/types';

class App extends React.Component{
  state = {
    country : "Armenia"
  };
  constructor(props){
    super(props);
    this.handleOnChangeCountry = this.handleOnChangeCountry.bind(this);
  }
  handleOnChangeCountry(){
    this.setState( state:{country:"USA"})
  }
  render(){
    return(
      <React.Fragment>
        <p>{this.state.country}</p>
        <button onClick={this.handleOnChangeCountry}>Poxel yerkir@</button>
        </React.Fragment>
    );
  }
}
export default App;
