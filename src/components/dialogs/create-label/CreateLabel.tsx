import Dialog from "@mui/material/Dialog";
import Button from "../../buttons/button/Button";
import CancelButton from "../../buttons/cancel/CancelButton";
import "../delete-contact/DeleteContact.scss";

function CreateLabel({ openCreateLabelDialog, setOpenCreateLabelDialog }: any) {
  return (
    <Dialog open={openCreateLabelDialog}>
      <div className="dialog__wrapper">
        <div className="dialog__content">
          <h3>Create label</h3>
          <input type="text" />
          <div className="dialog__buttons">
            <CancelButton onClick={() => setOpenCreateLabelDialog(false)} />
            <Button buttonText="Save" onClick={() => {}} />
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default CreateLabel;
