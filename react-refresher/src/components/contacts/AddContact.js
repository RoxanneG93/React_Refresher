import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    console.log(this.state);

    // grabbing the values from the state
    const { name, email, phone, errors } = this.state;

    // Check for errors
    if (name === "") {
      this.setState({
        errors: {
          name: "Name is required"
        }
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: {
          email: "Email is required"
        }
      });
      return;
    }
    if (phone === "") {
      this.setState({
        errors: {
          phone: "phone is required"
        }
      });
      return;
    }

    // creating newContact object to setState with
    const newContact = {
      // ES6 way == name: name
      // uuid generates an id for each new contact
      id: uuid(),
      name,
      email,
      phone
    };
    // give payload the new contact and set type
    dispatch({ type: "ADD_CONTACT", payload: newContact });

    // clear form state once form submitted
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    // redirect to home
    this.props.history.push("/");
  };

  // method that grabs form values and sets state wtih what user inputs
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    //   pulling these properties from state above
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          // pulling dispatch from state coming from Consumer Value
          // pulling dispatch so we can call action
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
