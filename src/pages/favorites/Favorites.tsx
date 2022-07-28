import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Favorites() {
  return (
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
          <TableRow
            key="test"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              test
            </TableCell>
            <TableCell align="right">test</TableCell>
            <TableCell align="right">test</TableCell>
            <TableCell align="right">
              <img
                src="./img/favourite_icon.svg"
                alt="favourite"
                onClick={() => {}}
              />
            </TableCell>
            <TableCell align="right">
              <img src="./img/trash_icon.svg" alt="trash" onClick={() => {}} />
            </TableCell>
            <TableCell>
              <img src="./img/edit_icon.svg" alt="edit" onClick={() => {}} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Favorites;
