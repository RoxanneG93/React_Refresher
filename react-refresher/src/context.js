import React, { Component } from "react";

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
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Emily Johnson",
        email: "emily@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Thomas Anderson",
        email: "thomas@gmail.com",
        phone: "888-888-8888"
      },
      {
        id: 3,
        name: "Javier Gomez",
        email: "javi@gmail.com",
        phone: "333-333-3333"
      }
    ],
    // Calls the action
    // takes in an action then sets state reducer
    dispatch: action => this.setState(state => reducer(state, action))
  };

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
