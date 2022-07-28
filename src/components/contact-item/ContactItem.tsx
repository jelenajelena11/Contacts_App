import "./ContactItem.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface Props {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  setOpenDeleteDialog: any;
  navigateToEdit: any;
  isFavorite: boolean;
}

export default function ContactItem({
  id,
  name,
  email,
  phone_number,
  isFavorite,
  setOpenDeleteDialog,
  navigateToEdit,
}: Props) {
  return (
    // <div key={id} className="list__wrapper">
    //   <div role="presentation">
    //     <span>{name}</span>
    //     <span>{email}</span>
    //     <span>{phone_number}</span>
    // {isFavorite ? (
    //   <img
    //     src="./img/favourite_icon.svg"
    //     alt="favourite"
    //     onClick={() => {}}
    //   />
    // ) : (
    //   <img
    //     src="./img/not_favorite_icon.svg"
    //     alt="not_favorite"
    //     onClick={() => {}}
    //   />
    // )}
    // <img
    //   src="./img/trash_icon.svg"
    //   alt="trash"
    //   onClick={setOpenDeleteDialog}
    // />
    //     <img src="./img/edit_icon.svg" alt="edit" onClick={navigateToEdit} />
    //   </div>
    // </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {name}
            </TableCell>
            <TableCell align="right">{email}</TableCell>
            <TableCell align="right">{phone_number}</TableCell>
            <TableCell align="right">
              {isFavorite ? (
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
        </TableBody>
      </Table>
    </TableContainer>
  );
}
