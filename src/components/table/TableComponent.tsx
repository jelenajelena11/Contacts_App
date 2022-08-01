import { ChangeEvent, useState } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import FavoriteIcon from "../../assets/favorite_icon.svg";
import NotFavoriteIcon from "../../assets/not_favorite_icon.svg";
import EditIcon from "../../assets/edit_icon.svg";
import TrashIcon from "../../assets/trash_icon.svg";
import { Contact } from "../../interfaces/Contact";
import "./TableComponent.scss";
import SearchBar from "../search-bar/SearchBar";

interface Props {
  data: Contact[];
  toggleDelete: Function;
  navigateToEdit: Function;
  setToFavorite?: any;
  deleteFromFavorite?: any;
}

function TableComponent({
  data,
  navigateToEdit,
  toggleDelete,
  setToFavorite,
  deleteFromFavorite,
}: Props) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  return (
    <>
      <SearchBar handleSearchChange={handleSearchChange} />
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "#F9FAFB" }}>
              <TableCell>Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone number</TableCell>
              <TableCell align="left" />
              <TableCell align="left" />
              <TableCell align="left" />
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .filter((value: Contact) => {
                if (searchInput === "") {
                  return value;
                }
                if (
                  value.name?.toLowerCase().includes(searchInput.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((c: Contact) => (
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
                  <TableCell align="left">{c.email}</TableCell>
                  <TableCell align="left">{c.phone_number}</TableCell>
                  <TableCell align="left">
                    {c.isFavorite ? (
                      <img
                        src={FavoriteIcon}
                        alt="favourite"
                        onClick={() => deleteFromFavorite(c.id)}
                        className="table_img"
                      />
                    ) : (
                      <img
                        src={NotFavoriteIcon}
                        alt="not_favorite"
                        onClick={() => setToFavorite(c.id)}
                        className="table_img"
                      />
                    )}
                  </TableCell>
                  <TableCell align="left">
                    <img
                      src={TrashIcon}
                      alt="trash"
                      onClick={() => toggleDelete(c.id)}
                      className="table_img"
                    />
                  </TableCell>
                  <TableCell>
                    <img
                      src={EditIcon}
                      alt="edit"
                      onClick={() => navigateToEdit(c.id)}
                      className="table_img"
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
