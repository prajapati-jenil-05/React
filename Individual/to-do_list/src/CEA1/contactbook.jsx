import React, { Component } from "react";

class ContactBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      firstName: "",
      lastName: "",
      mobile: "",
    };
  }

  // Generic handler for all input fields
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addContact = () => {
    const { firstName, lastName, mobile } = this.state;

    // Basic validation: ensure all fields have values
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      mobile.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    const newContact = {
      id: Date.now(),
      firstName,
      lastName,
      mobile,
      isExpanded: false, // Controls the "View" toggle
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      firstName: "",
      lastName: "",
      mobile: "",
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((c) => c.id !== id),
    }));
  };

  toggleView = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.map((c) =>
        c.id === id ? { ...c, isExpanded: !c.isExpanded } : c
      ),
    }));
  };

  render() {
    const { contacts, firstName, lastName, mobile } = this.state;

    return (
      <div style={{ padding: "20px" }}>
        <h2>Contact Book</h2>

        {/* Input Form */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={this.handleInput}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={this.handleInput}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={mobile}
          onChange={this.handleInput}
        />
        <button onClick={this.addContact}>Add Contact</button>

        <hr />

        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <div>
                <strong>{contact.firstName}</strong>
                <button onClick={() => this.toggleView(contact.id)}>
                  {contact.isExpanded ? "Hide" : "View"}
                </button>
                <button onClick={() => this.deleteContact(contact.id)}>
                  Delete
                </button>
              </div>

              {/* Conditional Rendering for Details */}
              {contact.isExpanded && (
                <div>
                  <p>Last Name: {contact.lastName}</p>
                  <p>Mobile: {contact.mobile}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactBook;
