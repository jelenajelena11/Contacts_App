import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteContact from "../../components/dialogs/delete-contact/DeleteContact";
import TableComponent from "../../components/table/TableComponent";
import { useFavorites } from "../../services/favorites";

function Favorites() {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const { favoriteList, getFavorites } = useFavorites();
  const navigate = useNavigate();

  const navigateToEdit = (id: number) => {
    const path = `/edit-contact/${id}`;
    navigate(path);
    return id;
  };

  useEffect(() => {
    getFavorites();
  }, []);
  return (
    // <TableContainer component={Paper} style={{ marginTop: "20px" }}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow style={{ background: "#F9FAFB" }}>
    //         <TableCell>Name</TableCell>
    //         <TableCell align="right">Email</TableCell>
    //         <TableCell align="right">Phone number</TableCell>
    //         <TableCell align="right" />
    //         <TableCell align="right" />
    //         <TableCell align="right" />
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       <TableRow
    //         key="test"
    //         sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //       >
    //         <TableCell component="th" scope="row">
    //           test
    //         </TableCell>
    //         <TableCell align="right">test</TableCell>
    //         <TableCell align="right">test</TableCell>
    //         <TableCell align="right">
    //           <img
    //             src="./img/favourite_icon.svg"
    //             alt="favourite"
    //             onClick={() => {}}
    //           />
    //         </TableCell>
    //         <TableCell align="right">
    //           <img src="./img/trash_icon.svg" alt="trash" onClick={() => {}} />
    //         </TableCell>
    //         <TableCell>
    //           <img src="./img/edit_icon.svg" alt="edit" onClick={() => {}} />
    //         </TableCell>
    //       </TableRow>
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    <>
      <TableComponent
        title="Favorites"
        setOpenDeleteDialog={() => setOpenDeleteDialog(true)}
        favorites={favoriteList}
        navigateToEdit={navigateToEdit}
      />

      {openDeleteDialog && (
        <DeleteContact
          openDeleteDialog={openDeleteDialog}
          setOpenDeleteDialog={setOpenDeleteDialog}
          deleteContact={() => {}}
        />
      )}
    </>
  );
}

export default Favorites;
