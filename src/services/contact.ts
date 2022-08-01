import axios from "axios";
import { Contact } from "../interfaces/Contact";

export const saveNewContact = async (data: Contact, profileImg: string) => {
  try {
    await axios.post(process.env.REACT_APP_API_URL + `/contacts`, {
      name: data.name,
      email: data.email,
      phone_number: data.phone_number,
      isFavorite: false,
      profile_photo: profileImg,
      labelId: data.label,
    });
  } catch (error: any) {
    console.log(error);
  }
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

export const updateContact = async (contact: Contact, profileImg: string) => {
  await axios.put(process.env.REACT_APP_API_URL + `/contacts/${contact.id}`, {
    name: contact.name,
    email: contact.email,
    phone_number: contact.phone_number,
    isFavorite: contact.isFavorite,
    profile_photo: profileImg,
    labelId: contact.label,
  });
};

export const getContactsByLabel = async (id: any) => {
  const contacts = await axios.get(
    process.env.REACT_APP_API_URL + `/contacts?labelId=${id}`,
  );

  return contacts;
};
