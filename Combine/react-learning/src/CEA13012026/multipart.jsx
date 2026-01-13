import React, { Component } from "react";

class MultiPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      t5: "Rajkot",
      t6: false,
      t7: "",
      t8: "",
      t9: "",
      index: 0,
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheckedInput = (e) => {
    this.setState({
      t6: e.target.checked,
    });
  };
  render() {
    const { t1, t2, t3, t4, t5, t6, t7, t8, t9, index } = this.state;
    return (
      <>
        <div>
          <div style={{ display: index === 0 ? "" : "none" }}>
            <h1>Part 1</h1>
            Enter t1: <br />
            <input
              type="text"
              name="t1"
              value={t1}
              onChange={this.handleInput}
            />
            <br />
            Enter t2: <br />
            <input
              type="text"
              name="t2"
              value={t2}
              onChange={this.handleInput}
            />
            <br />
            Enter t3: <br />
            <input
              type="text"
              name="t3"
              value={t3}
              onChange={this.handleInput}
            />
          </div>
          <div style={{ display: index === 1 ? "" : "none" }}>
            <h1>Part 2</h1>
            Enter t4: <br />
            <input
              type="radio"
              name="t4"
              value="No"
              checked={t4 === "No"}
              onChange={this.handleInput}
            />
            No
            <input
              type="radio"
              name="t4"
              value="Yes"
              checked={t4 === "Yes"}
              onChange={this.handleInput}
            />
            Yes
            <br />
            Enter t5: <br />
            <select name="t5" value={t5} onChange={this.handleInput}>
              <option value="Rajkot">Rajkot</option>
              <option value="Morbi">Morbi</option>
              <option value="Ahmedabad">Ahmedabad</option>
            </select>
            <br />
            Enter t6: <br />
            <input
              type="checkbox"
              name="t6"
              value={t6}
              onChange={this.handleCheckedInput}
            />
          </div>
          <div style={{ display: index === 2 ? "" : "none" }}>
            <h1>Part 3</h1>
            Enter t7: <br />
            <input
              type="date"
              name="t7"
              id=""
              value={t7}
              onChange={this.handleInput}
            />
            {/* <input
              type="text"
              name="t7"
              value={t7}
              onChange={this.handleInput}
            /> */}
            <br />
            Enter t8: <br />
            <input
              type="color"
              name="t8"
              id=""
              value={t8}
              onChange={this.handleInput}
            />
            {/* <input
              type="text"
              name="t8"
              value={t8}
              onChange={this.handleInput}
            /> */}
            <br />
            Enter t9: <br />
            <textarea
              name="t9"
              id=""
              value={t9}
              onChange={this.handleInput}
            ></textarea>
            {/* <input
              type="text"
              name="t9"
              value={t9}
              onChange={this.handleInput}
            /> */}
          </div>
          <button
            disabled={index === 0}
            onClick={() => {
              this.setState((prevState) => ({
                index: prevState.index - 1,
              }));
            }}
          >
            Previous
          </button>
          <button
            disabled={index === 2}
            onClick={() => {
              this.setState((prevState) => ({
                index: prevState.index + 1,
              }));
            }}
          >
            Next
          </button>
          <div>
            <hr />
            <h3>Entered Values</h3>
            <p>t1: {t1}</p>
            <p>t2: {t2}</p>
            <p>t3: {t3}</p>
            <p>t4: {t4}</p>
            <p>t5: {t5}</p>
            <p>t6: {t6 ? "Checked" : "Not Checked"}</p>
            <p>t7: {t7}</p>
            <p>t8: {t8}</p>
            <p>t9: {t9}</p>
          </div>
        </div>
      </>
    );
  }
}

export default MultiPart;
