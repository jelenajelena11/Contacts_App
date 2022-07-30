import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import Button from "../../buttons/Button";
import "../delete-contact/DeleteContact.scss";

function CreateLabel({
  openCreateLabelDialog,
  setOpenCreateLabelDialog,
  saveLabel,
}: any) {
  const [labelName, setLabelName] = useState("");

  return (
    <Dialog open={openCreateLabelDialog}>
      <div className="dialog__wrapper">
        <div className="dialog__content">
          <h3>Create label</h3>
          <input
            type="text"
            onChange={(event: any) => setLabelName(event?.target.value)}
            value={labelName}
            name="labelName"
          />
          <div className="dialog__buttons">
            <Button
              buttonText="Cancel"
              onClick={() => setOpenCreateLabelDialog(false)}
              type="button"
              className="white__button"
            />
            <Button
              buttonText="Save"
              onClick={() => saveLabel(labelName)}
              type="button"
              className="blue__button"
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default CreateLabel;
