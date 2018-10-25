import React, { Component } from "react";

// TESTING LIFE CYCLE METHODS

class Test extends Component {
  state = {
    title: "",
    completed: ""
  };

  // checking to see when log fires off
  //   Normally where you will make the api or ajax calls
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        // console.log(data)
        this.setState({
          title: data.title,
          completed: data.completed
        })
      );
  }

  //   This one fires before the DidMount call
  componentWillMount() {
    console.log("componentWillMount");
  }

  //   This one fires when something is updated, state, etc
  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate...");
  }

  //   This is normally used with Redux; run when component receives new properties
  // Can turn state into props in the component?
  // some of these mehtods are going to be depricate in React 17
  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps....");
  }

  //   ======== NEWER METHODS ==========

  //   This is a new static method
  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate....");
  }

  render() {
    const { title, completed } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{completed.toString()}</p>
      </div>
    );
  }
}

export default Test;
