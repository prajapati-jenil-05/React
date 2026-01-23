import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);

    // 1. Generate 50 dummy records
    const dummyData = Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      name: `Record Item ${index + 1}`,
      description: `Details for record ${index + 1}`,
    }));

    // 2. Initialize State with the specific variables requested
    this.state = {
      records: dummyData,
      currentpage: 1,
      recordperpage: 5,
      totalpages: 0,
      displayedrecords: [],
    };
  }

  componentDidMount() {
    // Calculate initial pagination data when component loads
    this.updatePaginationData();
  }

  // Helper function to handle slicing data and updating state
  updatePaginationData = () => {
    const { records, currentpage, recordperpage } = this.state;

    // Logic: Calculate start and end index for slicing the array
    const indexOfLastRecord = currentpage * recordperpage;
    const indexOfFirstRecord = indexOfLastRecord - recordperpage;

    // Slice the main array to get only current page records
    const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPagesCalc = Math.ceil(records.length / recordperpage);

    this.setState({
      displayedrecords: currentRecords,
      totalpages: totalPagesCalc,
    });
  };

  handleNext = () => {
    // Only proceed if not on the last page
    if (this.state.currentpage < this.state.totalpages) {
      this.setState(
        (prevState) => ({
          currentpage: prevState.currentpage + 1,
        }),
        this.updatePaginationData // Callback to update displayed records after page change
      );
    }
  };

  handlePrevious = () => {
    // Only proceed if not on the first page
    if (this.state.currentpage > 1) {
      this.setState(
        (prevState) => ({
          currentpage: prevState.currentpage - 1,
        }),
        this.updatePaginationData // Callback to update displayed records after page change
      );
    }
  };

  render() {
    const { currentpage, totalpages, displayedrecords } = this.state;

    return (
      <div style={styles.container}>
        <h2>Data Pagination Display</h2>

        {/* Display the List of Records */}
        <ul style={styles.list}>
          {displayedrecords.map((item) => (
            <li key={item.id} style={styles.listItem}>
              <strong>#{item.id}</strong> - {item.name}
            </li>
          ))}
        </ul>

        {/* Pagination Controls */}
        <div style={styles.paginationControls}>
          {/* Previous Button: Disabled if on page 1 */}
          <button
            onClick={this.handlePrevious}
            disabled={currentpage === 1}
            style={currentpage === 1 ? styles.disabledBtn : styles.btn}
          >
            Previous
          </button>

          {/* Page Indicator */}
          <span style={styles.pageInfo}>
            Page <strong>{currentpage}</strong> of <strong>{totalpages}</strong>
          </span>

          {/* Next Button: Disabled if on last page */}
          <button
            onClick={this.handleNext}
            disabled={currentpage === totalpages}
            style={currentpage === totalpages ? styles.disabledBtn : styles.btn}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Display;