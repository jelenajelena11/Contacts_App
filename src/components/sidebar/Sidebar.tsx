import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getContactsByLabelName, useContacts } from "../../services/contact";
import { useFavorites } from "../../services/favorites";
import { createLabel, useLabels } from "../../services/labels";
import CreateLabel from "../dialogs/create-label/CreateLabel";
import SidebarItem from "../sidebar-item/SidebarItem";
import "./Sidebar.scss";

function Sidebar() {
  const [openCreateLabelDialog, setOpenCreateLabelDialog] = useState(false);
  const { labelList, getLabels } = useLabels();
  const { contactList, getContacts } = useContacts();
  const { favoriteList, getFavorites } = useFavorites();

  const saveLabel = (label: any) => {
    createLabel(label).then(() => {
      setOpenCreateLabelDialog(false);
      getLabels();
    });
  };

  const showContactsBasedOnLabel = (name: string) => {
    getContactsByLabelName(name);
  };

  useEffect(() => {
    getLabels();
    getContacts();
    getFavorites();
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
        <NavLink to="/" className="sidebar__link">
          <SidebarItem
            sideImage="./img/contact_icon.svg"
            title="Contacts"
            itemNumber={contactList.length}
            onClick={() => {}}
          />
        </NavLink>
        <Link to="favorites" className="sidebar__link">
          <SidebarItem
            sideImage="./img/star_icon.svg"
            title="Favorites"
            itemNumber={favoriteList.length}
            onClick={() => {}}
          />
        </Link>
        <div className="sidebar__labels">
          <span>Labels</span>
          <hr />
        </div>
        {labelList.map((label: any) => (
          // <div key={label.id}>
          <Link to="/" key={label.id} className="sidebar__link">
            <SidebarItem
              sideImage="./img/labels_icon.svg"
              title={label.name}
              itemNumber={label.contacts.length}
              onClick={() => showContactsBasedOnLabel(label.name)}
            />
          </Link>
          // </div>
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
