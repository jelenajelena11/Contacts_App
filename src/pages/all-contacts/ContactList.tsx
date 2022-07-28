import { useEffect, useState } from "react";
import ContactItem from "../../components/contact-item/ContactItem";
import DeleteContact from "../../components/dialogs/delete-contact/DeleteContact";
import { useContacts } from "../../services/contact";

function ContactList() {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { contactList, getContacts } = useContacts();

  const navigateToEdit = (id: number) => {
    console.log(id);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <p>Name</p>
        <p>Email</p>
        <p>Phone number</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {contactList.map((c: any) => (
          <div key={c.id}>
            <ContactItem
              id={c.id}
              name={c.name}
              email={c.email}
              phone_number={c.phone_number}
              setOpenDeleteDialog={() => setOpenDeleteDialog(true)}
              navigateToEdit={(id: number) => navigateToEdit(id)}
            />
            {/* <img
              src="./img/favourite_icon.svg"
              alt="favourite"
              onClick={() => setOpenDeleteDialog(true)}
            />
            <img
              src="./img/trash_icon.svg"
              alt="trash"
              onClick={() => setOpenDeleteDialog(true)}
            />
            <img
              src="./img/edit_icon.svg"
              alt="edit"
              onClick={(c) => navigate(c)}
            /> */}
          </div>
        ))}

        {openDeleteDialog && (
          <DeleteContact
            openDeleteDialog={openDeleteDialog}
            setOpenDeleteDialog={setOpenDeleteDialog}
          />
        )}
      </div>
    </>
  );
}

export default ContactList;
