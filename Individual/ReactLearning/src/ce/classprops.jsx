import React, { Component } from "react";
import "./customcard.css";

class ClassProps extends Component {
  render() {
    const { name, email, button, url, onclick } = this.props;
    return (
      <div className="user-card">
        <img src={url} alt="alt image" />
        <h2>{name}</h2>
        <p>{email}</p>
        <button onClick={onclick}>{button}</button>
      </div>
    );
  }
}
export default ClassProps;
