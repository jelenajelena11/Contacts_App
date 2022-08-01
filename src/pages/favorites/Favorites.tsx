import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteContact from "../../components/dialogs/delete-contact/DeleteContact";
import { useDeleteDialog } from "../../components/dialogs/delete-contact/useDeleteContact";
import { useFavorites } from "../../services/hooks/useFavorites";
import {
  deleteContactFromFavorite,
  deleteSelectedContact,
} from "../../services/contact";
import TableComponent from "../../components/table/TableComponent";

interface Props {
  setIsDeletedContact: Function;
  setIsFavorite: Function;
  isFavorite: boolean;
}

function Favorites({ setIsDeletedContact, setIsFavorite, isFavorite }: Props) {
  const { favoriteList, getFavorites } = useFavorites();
  const { isShowingDelete, toggleDelete, deleteItemId } = useDeleteDialog();
  const navigate = useNavigate();

  const navigateToEdit = (id: number) => {
    const path = `/edit-contact/${id}`;
    navigate(path);
    return id;
  };

  const deleteContact = (id: number) => {
    deleteSelectedContact(id).then(() => {
      getFavorites();
      setIsDeletedContact(true);
    });
    toggleDelete(id);
  };

  const deleteFromFavorite = (id: number) => {
    deleteContactFromFavorite(id).then(() => {
      getFavorites();
      setIsFavorite(!isFavorite);
    });
  };

  useEffect(() => {
    getFavorites();
  }, [setIsDeletedContact]);

  return (
    <>
      <TableComponent
        data={favoriteList}
        navigateToEdit={(id: number) => navigateToEdit(id)}
        toggleDelete={(id: number) => toggleDelete(id)}
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

export default Favorites;
