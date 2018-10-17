import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  // use contructor for initializing otherwise you can just declar your state
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
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    // filter method loops through contacts and returns only contacts not with the same id
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      // React.Fragment you can use to eliminate unecessisary div elements
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
