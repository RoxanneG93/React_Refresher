import React, { Component } from "react";
import PropTypes from "prop-types";
import "./contact.css";

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

  onDeleteClick = () => {
    this.props.deleteClickHandler();
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
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
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
            onClick={this.onDeleteClick}
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
  }
}

// setting proptypes outside the class
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
