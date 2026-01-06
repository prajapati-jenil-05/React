import React, { Component } from "react";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      fname: "",
      lname: "",
      phone: "",
    };
  }
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addContact = () => {
    const { fname, lname, phone } = this.state;
    if (fname.trim() === "" || lname.trim() === "" || phone.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
    const newContact = {
      id: Date.now(),
      fname,
      lname,
      phone,
      isExpanded: false,
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      fname: "",
      lname: "",
      phone: "",
    }));
  };

  toggleView = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.map((e) =>
        e.id == id ? { ...e, isExpanded: !e.isExpanded } : e
      ),
    }));
  };

  delete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((e) => e.id != id),
    }));
  };

  render() {
    const { contacts, fname, lname, phone } = this.state;
    return (
      <>
        <input
          type="text"
          name="fname"
          value={fname}
          placeholder="First Name"
          onChange={this.handleInput}
        />
        <input
          type="text"
          name="lname"
          value={lname}
          placeholder="Last Name"
          onChange={this.handleInput}
        />
        <input
          type="text"
          name="phone"
          value={phone}
          placeholder="Phone Number"
          onChange={this.handleInput}
        />
        <button onClick={this.addContact}>Add Contact</button>
        <br />
        <ul>
          {contacts.map((x) => (
            <li key={x.id}>
              <div>
                <strong>{x.fname}</strong>
                <button onClick={() => this.toggleView(x.id)}>View</button>
                <button>Delete</button>
              </div>
              {x.isExpanded && (
                <div>
                  <p>Last Name: {x.lname}</p>
                  <p>Last Name: {x.phone}</p>
                  <hr />
                </div>
              )}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default ContactList;
