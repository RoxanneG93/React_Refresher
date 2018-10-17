import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  // use contructor for initializing otherwise you can just declar your state

  render() {
    //   we somehow useing the Consumer here...??? The Fugde LOOK MORE INTO THIS
    // The Consumer tag lets us utilize the value prop which holds the state rendering the contacts like before
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
