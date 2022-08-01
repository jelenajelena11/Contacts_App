import Dialog from "@mui/material/Dialog";
import Button from "../../buttons/Button";
import "../../buttons/Button.scss";
import "./DeleteContact.scss";
import IllustrationIcon from "../../../assets/Illustration.svg";

interface Props {
  openDeleteDialog: boolean;
  closeDialog: Function;
  deleteContact: Function;
}

function DeleteContact({
  openDeleteDialog,
  closeDialog,
  deleteContact,
}: Props) {
  return (
    <Dialog open={openDeleteDialog}>
      <div className="dialog__wrapper">
        <img src={IllustrationIcon} alt="alert" />
        <div className="dialog__content">
          <h3>Delete contact</h3>
          <p>Are you sure you want to delete this contact?</p>
          <div className="dialog__buttons">
            <Button
              onClick={closeDialog}
              buttonText="Cancel"
              type="button"
              className="white__button"
            />
            <Button
              onClick={deleteContact}
              buttonText="Delete"
              type="button"
              className="red__button"
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default DeleteContact;
