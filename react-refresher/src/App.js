import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import About from "./components/pages/about";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";

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
        <Router>
          <div className="App">
            <header className="App-header">
              <Header branding="Contact App" />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/contact/add" component={AddContact} />
                  <Route
                    exact
                    path="/contact/edit/:id"
                    component={EditContact}
                  />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/test" component={Test} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </header>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
