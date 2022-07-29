import axios from "axios";
import { useState } from "react";
import { Contact } from "../interfaces/Contact";

export const useContacts = () => {
  const [contactList, setContactList] = useState<any[]>([]);
  const getContacts = async () => {
    const contacts = await axios.get(
      process.env.REACT_APP_API_URL + `/contacts`,
    );
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

export const saveNewContact = async (data: any, label: any) => {
  try {
    await axios.post("http://localhost:3001/contacts", {
      name: data.name,
      email: data.email,
      phone_number: data.phone_number,
      isFavorite: false,
      label: { name: label },
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const getContactsByLabelName = async (name: string) => {
  const contacts = await axios.get(
    `http://localhost:3001/contacts?name=${name}`,
  );

  console.log(contacts);
};
