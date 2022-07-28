import "./DeleteButton.scss";

interface Props {
  onClick: () => void;
}

function DeleteButton({ onClick = () => {} }: Props) {
  return (
    <button type="button" onClick={onClick} className="delete__button">
      Delete
    </button>
  );
}

export default DeleteButton;
