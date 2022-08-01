import axios from "axios";
import { useState } from "react";
import { Contact } from "../../interfaces/Contact";

export const useContacts = () => {
  const [contactList, setContactList] = useState<Contact[]>([]);
  const getContacts = async () => {
    const contacts = await axios.get(
      process.env.REACT_APP_API_URL + `/contacts`,
    );
    setContactList(contacts.data);
  };

  return { contactList, getContacts };
};

export const useContactById = (contactId?: number | string) => {
  const [contact, setContact] = useState<Contact>();
  const getContact = async () => {
    const contact = await axios.get(
      process.env.REACT_APP_API_URL + `/contacts/${contactId}`,
    );
    setContact(contact.data);
  };
  return { contact, getContact };
};
