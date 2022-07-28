import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createLabel, useLabels } from "../../services/labels";
import CreateLabel from "../dialogs/create-label/CreateLabel";
import "./Sidebar.scss";

function Sidebar() {
  const [openCreateLabelDialog, setOpenCreateLabelDialog] = useState(false);
  const { labelList, getLabels } = useLabels();

  const saveLabel = (label: any) => {
    // console.log(labelName);
    createLabel(label).then((resp) => {
      console.log(resp);
    });
  };

  useEffect(() => {
    getLabels();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img alt="logo" src="./img/Mark.png" />
        <span>Contacts</span>
      </div>
      <div className="sidebar__create_btn">
        <Link to="create-contact" className="sidebar__link">
          <button type="button">
            <img src="./img/plus_icon.svg" alt="plus_icon" />
            <span>Create contact</span>
          </button>
        </Link>
      </div>
      <div className="sidebar__items">
        <Link to="/" className="sidebar__link">
          <button className="sidebar__item active" type="button">
            <div className="sidebar__item_left">
              <img src="./img/contact_icon.svg" alt="contacts" />
              <span>Contacts</span>
            </div>
          </button>
        </Link>
        <Link to="favorites" className="sidebar__link">
          <button className="sidebar__item" type="button">
            <div className="sidebar__item_left">
              <img src="./img/star_icon.svg" alt="contacts" />
              <span>Favorites</span>
            </div>
          </button>
        </Link>
        <div className="sidebar__labels">
          <span>Labels</span>
          <hr />
        </div>
        {/* <button className="sidebar__item" type="button">
          <div className="sidebar__item_left">
            <img src="./img/labels_icon.svg" alt="contacts" />
            <span>Work</span>
          </div>
          <span>6</span>
        </button> */}
        {/* <button className="sidebar__item" type="button">
          <div className="sidebar__item_left">
            <img src="./img/labels_icon.svg" alt="contacts" />
            <span>Family</span>
          </div>
          <span>3</span>
        </button> */}
        {/* <button className="sidebar__item" type="button">
          <div className="sidebar__item_left">
            <img src="./img/labels_icon.svg" alt="contacts" />
            <span>Friends</span>
          </div>
          <span>1</span>
        </button> */}
        {labelList.map((label: any) => (
          <button className="sidebar__item" type="button" key={label.id}>
            <div className="sidebar__item_left">
              <img src="./img/labels_icon.svg" alt="contacts" />
              {label.name}
            </div>
          </button>
        ))}
        <button
          className="sidebar__item"
          type="button"
          onClick={() => setOpenCreateLabelDialog(true)}
        >
          <div className="sidebar__item_left">
            <img src="./img/plus_grey_icon.svg" alt="plus" />
            <span>Create Label</span>
          </div>
        </button>
      </div>
      {openCreateLabelDialog && (
        <CreateLabel
          setOpenCreateLabelDialog={setOpenCreateLabelDialog}
          openCreateLabelDialog={openCreateLabelDialog}
          saveLabel={saveLabel}
        />
      )}
    </div>
  );
}

export default Sidebar;
