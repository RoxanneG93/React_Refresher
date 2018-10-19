import React from "react";

const About = props => {
  return (
    <div>
      {/* this is how you access paramerters */}
      {/* <h1 className="display-4">{props.match.params.id}</h1> */}
      <h1 className="display-4">About</h1>
      <p className="lead">Simple App to manage contacts</p>
      <p className="text-seondary">Version 1.0.0</p>
    </div>
  );
};

export default About;
