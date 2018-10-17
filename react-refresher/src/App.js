import React, { Component } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

// importing the provider
import { Provider } from "./context";

// importing bootstrap here
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      // set everything inside the provider
      <Provider>
        <div className="App">
          <header className="App-header">
            <Header branding="Contact App" />
            <div className="container">
              <Contacts />
            </div>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
