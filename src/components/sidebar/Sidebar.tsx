import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getContactsByLabel, useContacts } from "../../services/contact";
import { useFavorites } from "../../services/favorites";
import { createLabel, useLabels } from "../../services/labels";
import CreateLabel from "../dialogs/create-label/CreateLabel";
import SidebarItem from "../sidebar-item/SidebarItem";
import "./Sidebar.scss";
import ContactIcon from "../../assets/contact_icon.svg";
import PlusIcon from "../../assets/plus_icon.svg";
import Logo from "../../assets/mark.svg";
import StarIcon from "../../assets/star_icon.svg";
import LabelsIcon from "../../assets/labels_icon.svg";
import PlusGreyIcon from "../../assets/plus_grey_icon.svg";

function Sidebar({
  isDeletedContact,
  isFavorite,
  isCreated,
}: // setContactsByLabel,
any) {
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

  const showContactsBasedOnLabel = (id: number) => {
    const t = getContactsByLabel(id);
    console.log(t);
  };

  useEffect(() => {
    getLabels();
    getContacts();
    getFavorites();
  }, [isDeletedContact, isFavorite, isCreated]);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img alt="logo" src={Logo} />
        <span>Contacts</span>
      </div>
      <div className="sidebar__create_btn">
        <Link to="create-contact" className="sidebar__link">
          <button type="button">
            <img src={PlusIcon} alt="plus_icon" />
            <span>Create contact</span>
          </button>
        </Link>
      </div>
      <div className="sidebar__items">
        <NavLink to="/" className="sidebar__link">
          <SidebarItem
            sideImage={ContactIcon}
            title="Contacts"
            itemNumber={contactList.length}
            onClick={() => {}}
          />
        </NavLink>
        <Link to="favorites" className="sidebar__link">
          <SidebarItem
            sideImage={StarIcon}
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
          // <Link to="" key={label.id} className="sidebar__link">
          <div key={label.id} className="sidebar__link">
            <SidebarItem
              sideImage={LabelsIcon}
              title={label.name}
              itemNumber={label.contacts.length}
              onClick={() => showContactsBasedOnLabel(label.id)}
            />
          </div>
          // </Link>
        ))}
        <button
          className="sidebar__item"
          type="button"
          onClick={() => setOpenCreateLabelDialog(true)}
        >
          <div className="sidebar__item_left">
            <img src={PlusGreyIcon} alt="plus" />
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
