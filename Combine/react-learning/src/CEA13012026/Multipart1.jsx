import React, { Component } from "react";
class MultiPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      t5: "",
      t6: "",
      t7: "",
      t8: "",
      t9: "",
      index: 0,
    };
  }
  onclicknext = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };
  onclickprevious = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  };
  render() {
    const { t1, t2, t3, t4, t5, t6, t7, t8, t9, index } = this.state;
    return (
      <div>
        <div style={{ display: index === 0 ? "" : "none" }}>
          <h1>Part1</h1>
          <input
            type="text"
            value={t1}
            placeholder="First Name"
            onChange={(e) => this.setState({ t1: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t2}
            placeholder="Last Name"
            onChange={(e) => this.setState({ t2: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t3}
            placeholder="Mobile Number"
            onChange={(e) => this.setState({ t3: e.target.value })}
          />
          <br />
        </div>
        <div style={{ display: index === 1 ? "" : "none" }}>
          <h1>Part2</h1>
          <input
            type="text"
            value={t4}
            placeholder="First Name"
            onChange={(e) => this.setState({ t4: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t5}
            placeholder="Last Name"
            onChange={(e) => this.setState({ t5: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t6}
            placeholder="Mobile Number"
            onChange={(e) => this.setState({ t6: e.target.value })}
          />
          <br />
        </div>
        <div style={{ display: index === 2 ? "" : "none" }}>
          <h1>Part3</h1>
          <input
            type="text"
            value={t7}
            placeholder="First Name"
            onChange={(e) => this.setState({ t7: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t8}
            placeholder="Last Name"
            onChange={(e) => this.setState({ t8: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={t9}
            placeholder="Mobile Number"
            onChange={(e) => this.setState({ t9: e.target.value })}
          />
          <br />
        </div>
        <div>
          <button disabled={index === 2} onClick={this.onclicknext}>
            Next
          </button>
          <button disabled={index === 0} onClick={this.onclickprevious}>
            Previous
          </button>
        </div>
        <div>
          <div>{t1}</div>
          <div>{t2}</div>
          <div>{t3}</div>
        </div>
        <div>
          <div>{t4}</div>
          <div>{t5}</div>
          <div>{t6}</div>
        </div>
        <div>
          <div>{t7}</div>
          <div>{t8}</div>
          <div>{t9}</div>
        </div>
      </div>
    );
  }
}
export default MultiPart;
