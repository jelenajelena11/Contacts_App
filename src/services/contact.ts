import axios from "axios";
import { useState } from "react";
import { Contact } from "../interfaces/Contact";

export const useContacts = () => {
  const [contactList, setContactList] = useState<any[]>([]);
  const getContacts = async () => {
    const contacts = await axios.get("http://localhost:3001/contacts");
    setContactList(contacts.data);
  };

  return { contactList, getContacts };
};

export const useContactById = (contactId?: string) => {
  const [contact, setContact] = useState<Contact>();
  const getContact = async () => {
    const contact = await axios.get(
      `http://localhost:3001/contacts/${contactId}`,
    );
    setContact(contact.data);
  };
  return { contact, getContact };
};

export const createContact = async (data: any) => {
  try {
    await axios.post("http://localhost:3001/contacts", {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
    });
  } catch (error: any) {
    console.log(error);
  }
};
