import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import Content from './components/Content';
import './components/Footer.css';
import './components/Content.css';
import './components/SideBar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  state = {
    isVisible: false
  };

  constructor(props) {
    super(props);
    this.handleOnToggle = this.handleOnToggle.bind(this);
  }

  handleOnToggle() {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    return (
      <Container fluid>
        <Header onToggleHendler={this.handleOnToggle} />
        <Row>
          {
            this.state.isVisible && (
              <Col md="3">
                <SideBar />
              </Col>
            )
          }
          <Col md={this.state.isVisible ? 9 : 12}>
            <Content />
          </Col>
        </Row>
        <Footer />
      </Container >
    );
  }
}
export default App;
