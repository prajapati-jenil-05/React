  import React, { useState } from "react";

  export default function ContactBook() {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const addContact = () => {
      if (name.trim() === "" || phone.trim() === "") return;

      setContacts([...contacts, { id: Date.now(), name, phone, visible: false }]);
      setName("");
      setPhone("");
    };

    const deleteContact = (id) => {
      setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const toggleShowContact = (id) => {
      setContacts(
        contacts.map((contact) => {
          if (contact.id === id) {
            return { ...contact, visible: !contact.visible };
          }
        }),
      );
    };

    return (
      <>
        <h2>📇 Contact Book</h2>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={addContact}>Add</button>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}
              {contact.visible ? <div>{contact.phone}</div> : ""}
              <button onClick={() => toggleShowContact(contact.id)}>
                {contact.visible ? "Hide Contact" : "View Contact"}
              </button>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
