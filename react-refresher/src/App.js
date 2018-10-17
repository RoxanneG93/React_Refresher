import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

// importing bootstrap here
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header branding="Contact App" />
          <div className="container">
            <Contacts />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
