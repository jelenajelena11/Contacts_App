import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Contact } from "../../interfaces/Contact";

interface Props {
  title: string;
  setOpenDeleteDialog: any;
  contacts?: Contact[];
  favorites?: Contact[];
  navigateToEdit: any;
}

function TableComponent({
  title,
  setOpenDeleteDialog,
  contacts,
  favorites,
  navigateToEdit,
}: Props) {
  return (
    <>
      <h2>{title}</h2>
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
            {contacts &&
              contacts.map((c: Contact) => (
                <TableRow
                  key={c.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <img
                      src={c.profile_photo}
                      alt="profile"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "20px",
                      }}
                    />
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
                        onClick={() => {}}
                      />
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <img
                      src="./img/trash_icon.svg"
                      alt="trash"
                      onClick={setOpenDeleteDialog}
                    />
                  </TableCell>
                  <TableCell>
                    <img
                      src="./img/edit_icon.svg"
                      alt="edit"
                      onClick={navigateToEdit}
                    />
                  </TableCell>
                </TableRow>
              ))}
            {favorites &&
              favorites.map((c: Contact) => (
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
                    <img
                      src="./img/favourite_icon.svg"
                      alt="favourite"
                      onClick={() => {}}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <img
                      src="./img/trash_icon.svg"
                      alt="trash"
                      onClick={setOpenDeleteDialog}
                    />
                  </TableCell>
                  <TableCell>
                    <img
                      src="./img/edit_icon.svg"
                      alt="edit"
                      onClick={navigateToEdit}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableComponent;
