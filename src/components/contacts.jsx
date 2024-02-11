import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/contacts.css";
import data from "./data";

function Input() {
  const [value, setValue] = useState("");

  function changeValue(e) {
    setValue(e.target.value);
  }
  return (
    <input
      value={value}
      onChange={changeValue}
      placeholder="add contact here"
    ></input>
  );
}

export function Contact() {
  let contacts = data.contacts.list;
  const [contactList, setContactList] = useState(contacts);
  const [editMode, setEditMode] = useState(false);

  function addContact() {
    let newContactList = [
      ...contactList,
      {
        id: uuidv4(),
        content: "",
      },
    ];
    setContactList(newContactList);
  }

  function deleteContact(id) {
    let newContactList = contactList.filter((contact) => contact.id !== id);
    setContactList(newContactList);
  }

  return (
    <section id="contact" onFocus={() => setEditMode(true)}>
      <h3 id="contactsHeader">Contacts</h3>
      {contactList.map((contact) => (
        <div key={contact.id}>
          <Input id={contact.id} />
          {editMode && (
            <div>
              <button
                id="deleteButton"
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
      {editMode && (
        <div>
          <button id="saveButton" onClick={() => setEditMode(!editMode)}>
            Save
          </button>
          <button id="addContactButton" onClick={addContact}>
            Add
          </button>
        </div>
      )}
    </section>
  );
}
