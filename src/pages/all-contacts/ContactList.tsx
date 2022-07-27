import { useState } from "react";
import DeleteContact from "../../components/dialogs/delete-contact/DeleteContact";

function ContactList() {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  return (
    <>
      <p>ContactList</p>
      <button onClick={() => setOpenDeleteDialog(true)} type="button">
        Open dialog
      </button>
      {openDeleteDialog && (
        <DeleteContact
          openDeleteDialog={openDeleteDialog}
          setOpenDeleteDialog={setOpenDeleteDialog}
        />
      )}
    </>
  );
}

export default ContactList;
