import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteContact from "../../components/dialogs/delete-contact/DeleteContact";
import {
  addContactToFavorite,
  deleteContactFromFavorite,
  deleteSelectedContact,
  useContacts,
} from "../../services/contact";
import { useDeleteDialog } from "../../components/dialogs/delete-contact/useDeleteContact";
import TableComponent from "../../components/table/TableComponent";

function ContactList({ setIsDeletedContact, setIsFavorite, isFavorite }: any) {
  const { contactList, getContacts } = useContacts();
  const { isShowingDelete, toggleDelete, deleteItemId } = useDeleteDialog();
  const navigate = useNavigate();

  const navigateToEdit = (id: number) => {
    const path = `/edit-contact/${id}`;
    navigate(path);
    return id;
  };

  const deleteContact = (id: any) => {
    deleteSelectedContact(id).then(() => {
      getContacts();
      setIsDeletedContact(true);
    });
    toggleDelete(id);
  };

  const setToFavorite = (id: number) => {
    addContactToFavorite(id).then(() => {
      getContacts();
      setIsFavorite(true);
    });
  };

  const deleteFromFavorite = (id: number) => {
    deleteContactFromFavorite(id).then(() => {
      getContacts();
      setIsFavorite(!isFavorite);
    });
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <TableComponent
        data={contactList}
        navigateToEdit={(id: number) => navigateToEdit(id)}
        toggleDelete={(id: number) => toggleDelete(id)}
        setToFavorite={(id: number) => setToFavorite(id)}
        deleteFromFavorite={(id: number) => deleteFromFavorite(id)}
      />
      {isShowingDelete && (
        <DeleteContact
          openDeleteDialog={isShowingDelete}
          closeDialog={toggleDelete}
          deleteContact={() => deleteContact(deleteItemId)}
        />
      )}
    </>
  );
}

export default ContactList;
