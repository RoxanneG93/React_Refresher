import React, { Component } from "react";
import axios from "axios";

// CONTEXT API is like our PROVIDER for mangaging STATE

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        // this adds the payload to the state contacts - need to look this up more
        contacts: [action.payload, ...state.contacts]
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        // map through state contact and show the contatct that has the same id in the payload
        // using ternary check if it matches and set contact else display original contact
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    // Calls the action
    // takes in an action then sets state reducer
    dispatch: action => this.setState(state => reducer(state, action))
  };

  // Here we will be calling from the API for our contact users
  // Here we are making the api call to users asynchrnous and assigning the get request
  // to variable res. the componentDidMount method will then await for the promise before
  // it sets the state
  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    this.setState({ contacts: res.data });
  }

  render() {
    //   Setting the provider value with the state above so any component can use it?
    //  Setting ENTIRE Application state in the provider
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

// Setting Consumer to allow this particular variable to utilize state?
export const Consumer = Context.Consumer;
