import { useEffect, useState } from "react";
// import ContactItem from "../../components/contact-item/ContactItem";
import { useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteContact from "../../components/dialogs/delete-contact/DeleteContact";
import { Contact } from "../../interfaces/Contact";
import { useContacts } from "../../services/contact";

function ContactList() {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { contactList, getContacts } = useContacts();
  const navigate = useNavigate();

  const navigateToEdit = (id: number) => {
    const path = `/edit-contact/${id}`;
    navigate(path);
    return id;
  };

  const deleteContact = () => {};

  const setToFavorites = (id: number) => {
    console.log(id);
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      {/* {contactList.map((c: Contact) => (
        <div key={c.id}>
          <ContactItem
            id={c.id}
            name={c.name}
            email={c.email}
            phone_number={c.phone_number}
            isFavorite={c.isFavorite}
            setOpenDeleteDialog={() => setOpenDeleteDialog(true)}
            navigateToEdit={(id: number) => navigateToEdit(id)}
          />
        </div>
      ))} */}
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "#F9FAFB" }}>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone number</TableCell>
              <TableCell align="right" />
              <TableCell align="right" />
              <TableCell align="right" />
            </TableRow>
          </TableHead>
          <TableBody>
            {contactList.map((c: Contact) => (
              <TableRow
                key={c.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {c.name}
                </TableCell>
                <TableCell align="right">{c.email}</TableCell>
                <TableCell align="right">{c.phone_number}</TableCell>
                <TableCell align="right">
                  {c.isFavorite ? (
                    <img
                      src="./img/favourite_icon.svg"
                      alt="favourite"
                      onClick={() => {}}
                    />
                  ) : (
                    <img
                      src="./img/not_favorite_icon.svg"
                      alt="not_favorite"
                      onClick={() => setToFavorites(c.id)}
                    />
                  )}
                </TableCell>
                <TableCell align="right">
                  <img
                    src="./img/trash_icon.svg"
                    alt="trash"
                    onClick={() => setOpenDeleteDialog(true)}
                  />
                </TableCell>
                <TableCell>
                  <img
                    src="./img/edit_icon.svg"
                    alt="edit"
                    onClick={() => navigateToEdit(c.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {openDeleteDialog && (
        <DeleteContact
          openDeleteDialog={openDeleteDialog}
          setOpenDeleteDialog={setOpenDeleteDialog}
          deleteContact={deleteContact}
        />
      )}
    </>
  );
}

export default ContactList;
