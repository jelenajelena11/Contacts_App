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

export const saveNewContact = async (data: any, profileImg: any) => {
  try {
    await axios.post(process.env.REACT_APP_API_URL + `/contacts`, {
      name: data.name,
      email: data.email,
      phone_number: data.phone_number,
      isFavorite: false,
      profile_photo: profileImg,
      label: data.label,
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const getContactsByLabel = async (id: number) => {
  await axios
    .get(`http://localhost:3001/contacts?label=${id}`)
    .then((response) => {
      return response;
    });
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

export const updateContact = async (contact: any) => {
  console.log(contact);
  await axios.put(process.env.REACT_APP_API_URL + `/contacts/${contact.id}`, {
    name: contact.name,
    email: contact.email,
    phone_number: contact.phone_number,
    isFavorite: contact.isFavorite,
    profile_photo: contact.profile_photo,
    label: contact.label,
  });
};
