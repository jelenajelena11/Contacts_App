import axios from "axios";
import { useState } from "react";
import { Contact } from "../interfaces/Contact";

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

export const useContactById = (contactId?: any) => {
  const [contact, setContact] = useState<any>();
  const getContact = async () => {
    const contact = await axios.get(
      process.env.REACT_APP_API_URL + `/contacts/${contactId}`,
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
  await axios.get(`http://localhost:3001/contacts?name=${name}`);
};

export const deleteSelectedContact = async (contactId: number) => {
  await axios.delete(process.env.REACT_APP_API_URL + `/contacts/${contactId}`);
};

export const addContactToFavorite = async (contactId: number) => {
  await axios.patch(process.env.REACT_APP_API_URL + `/contacts/${contactId}`, {
    isFavorite: true,
  });
};

export const deleteContactFromFavorite = async (contactId: number) => {
  await axios.patch(process.env.REACT_APP_API_URL + `/contacts/${contactId}`, {
    isFavorite: false,
  });
};
