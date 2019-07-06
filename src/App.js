import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Content from './components/Content';

import './App.css';

class App extends React.Component {
  state = {
    country: "Armenia"
  };
  constructor(props) {
    super(props);
    this.handleOnChangeCountry = this.handleOnChangeCountry.bind(this);
  }
  handleOnChangeCountry() {
    this.setState({ country: "USA" })
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <SideBar />
        <Content />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
