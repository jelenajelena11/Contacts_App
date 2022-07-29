import Dialog from "@mui/material/Dialog";
import Button from "../../buttons/button/Button";
// import CancelButton from "../../buttons/cancel/CancelButton";
// import DeleteButton from "../../buttons/delete/DeleteButton";
import "./DeleteContact.scss";

function DeleteContact({
  openDeleteDialog,
  setOpenDeleteDialog,
  deleteContact,
}: any) {
  return (
    <Dialog open={openDeleteDialog}>
      <div className="dialog__wrapper">
        <img src="./img/Illustration.svg" alt="alert" />
        <div className="dialog__content">
          <h3>Delete contact</h3>
          <p>Are you sure you want to delete this contact?</p>
          <div className="dialog__buttons">
            {/* <CancelButton onClick={() => setOpenDeleteDialog(false)} /> */}
            <Button
              onClick={() => setOpenDeleteDialog(false)}
              buttonText="Cancel"
              type="button"
            />
            {/* <DeleteButton onClick={deleteContact} /> */}
            <Button onClick={deleteContact} buttonText="Delete" type="button" />
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default DeleteContact;
