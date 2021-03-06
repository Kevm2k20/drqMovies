import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Read } from './components/Read.2.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Start of the Navbar */}
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          {/* Switch statement for changing components in the navbar */}
          <Switch>
            <Route path='/' component={Read}  />
            <Route path='/create' component={Header}  />
            <Route path='/Read' component={Read}  />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;