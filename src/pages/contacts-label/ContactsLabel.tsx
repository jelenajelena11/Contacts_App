import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteContact from "../../components/dialogs/delete-contact/DeleteContact";
import { useDeleteDialog } from "../../components/dialogs/delete-contact/useDeleteContact";
import TableComponent from "../../components/table/TableComponent";
import {
  addContactToFavorite,
  deleteContactFromFavorite,
  deleteSelectedContact,
  getContactsByLabel,
} from "../../services/contact";

interface Props {
  setIsDeletedContact: Function;
  setIsFavorite: Function;
  isFavorite: boolean;
}

function ContactsLabel({
  setIsDeletedContact,
  setIsFavorite,
  isFavorite,
}: Props) {
  const [contactsByLabel, setContactsByLabel] = useState([]);
  const { isShowingDelete, toggleDelete, deleteItemId } = useDeleteDialog();
  const { id } = useParams();

  const navigate = useNavigate();

  const navigateToEdit = (id: number) => {
    const path = `/edit-contact/${id}`;
    navigate(path);
    return id;
  };

  const deleteContact = (contactId: number) => {
    deleteSelectedContact(contactId).then(() => {
      getContactsByLabel(id);
      setIsDeletedContact(true);
    });
    toggleDelete(contactId);
  };

  const setToFavorite = (contactId: number) => {
    addContactToFavorite(contactId).then(() => {
      getContactsByLabel(id);
      setIsFavorite(!isFavorite);
    });
  };

  const deleteFromFavorite = (contactId: number) => {
    deleteContactFromFavorite(contactId).then(() => {
      getContactsByLabel(id);
      setIsFavorite(!isFavorite);
    });
  };

  useEffect(() => {
    getContactsByLabel(id).then((res) => {
      setContactsByLabel(res.data);
    });
  }, [id, isFavorite]);

  return (
    <>
      <TableComponent
        data={contactsByLabel}
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

export default ContactsLabel;
