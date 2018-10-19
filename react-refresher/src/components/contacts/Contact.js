import React, { Component } from "react";
import PropTypes from "prop-types";
import "./contact.css";
import { Consumer } from "../../context";

class Contact extends Component {
  // this is another way of setting prop types inside the class
  // static propTypes = {
  //     name: PropTypes.string.isRequired,
  //     email: PropTypes.string.isRequired,
  //     phone: PropTypes.string.isRequired
  // }

  //   for custom methods like "onShowClick" we need to BIND them with contructor so THIS can be defined
  //   constructor() {
  //     super();
  //     this.state = {
  //       test: "hello"
  //     };

  //     this.onShowClick = this.onShowClick.bind(this);
  //   }

  state = {
    showContactInfo: false
  };

  //   Now with CONTXT API the delete fucntion takes in the id, and dispatch so it can set
  // the dispatch to the defined DELETE_CONTACT method in the reducer
  onDeleteClick = (id, dispatch) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id
    });
  };
  //   If we just run an arrow function on the custom method you DO NOT NEED TO BIND
  //   onShowClick = e => {
  //     this.setState({
  //       // istead of just setting to fase we can toggle the opposite
  //       showContactInfo: !this.state.showContactInfo
  //     });
  //   };

  render() {
    //   destructoring the props
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      // Need our consumer to access the state in Context
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={() => {
                    this.setState({
                      // istead of just setting to fase we can toggle the opposite
                      showContactInfo: !this.state.showContactInfo
                    });
                  }}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  //   hopefully a better way to do this bit below
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// setting proptypes outside the class
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
