import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DeleteContact from "../../components/dialogs/delete-contact/DeleteContact";
import { useDeleteDialog } from "../../components/dialogs/delete-contact/useDeleteContact";
import { useFavorites } from "../../services/favorites";
import { deleteSelectedContact } from "../../services/contact";
import TableComponent from "../../components/table/TableComponent";

function Favorites({ setIsDeletedContact }: any) {
  const { favoriteList, getFavorites } = useFavorites();
  const { isShowingDelete, toggleDelete, deleteItemId } = useDeleteDialog();
  const navigate = useNavigate();

  const navigateToEdit = (id: number) => {
    const path = `/edit-contact/${id}`;
    navigate(path);
    return id;
  };

  const deleteContact = (id: any) => {
    deleteSelectedContact(id).then(() => {
      getFavorites();
      setIsDeletedContact(true);
    });
    toggleDelete(id);
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
