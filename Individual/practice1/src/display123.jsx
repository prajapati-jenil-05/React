import React, { Component } from "react";
class display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: [],
    };
  }

  render() {
    const { record, recordsperpage, currentpage, totalpages } = this.state;
    return (
      <>
        <ul>
          {record
            .slice(
              currentpage * recordsperpage,
              currentpage * recordsperpage + recordsperpage,
            )
            .map((x, lenght) => (
              <li></li>
            ))}
        </ul>
      </>
    );
  }
}
