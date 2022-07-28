import "./ContactItem.scss";

interface Props {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  setOpenDeleteDialog: any;
  navigateToEdit: any;
}

export default function ContactItem({
  id,
  name,
  email,
  phone_number,
  setOpenDeleteDialog,
  navigateToEdit,
}: Props) {
  return (
    <div key={id} className="list__wrapper">
      <div role="presentation">
        <span>{name}</span>
        <span>{email}</span>
        <span>{phone_number}</span>
        <img
          src="./img/favourite_icon.svg"
          alt="favourite"
          onClick={() => {}}
        />
        <img
          src="./img/trash_icon.svg"
          alt="trash"
          onClick={setOpenDeleteDialog}
        />
        <img src="./img/edit_icon.svg" alt="edit" onClick={navigateToEdit} />
      </div>
    </div>
  );
}
