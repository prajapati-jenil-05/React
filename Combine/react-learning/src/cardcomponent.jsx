import React, { Component } from "react";
import "./card.css";

class CardComponent extends Component {
  render() {
    return (
      <>
        <center>
          <div className="user-card">
            <img src="https://picsum.photos/200" alt="somthing" />
            <br /> <br />
            <button>Follow</button>
            <br />
            <p>This is paragraph</p>
          </div>
        </center>
      </>
    );
  }
}
export default CardComponent;
