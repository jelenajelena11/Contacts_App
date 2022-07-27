import "./CancelButton.scss";

interface Props {
  onClick: () => void;
}

function CancelButton({ onClick = () => {} }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      onKeyDown={onClick}
      className="cancel__button"
    >
      Cancel
    </button>
  );
}

export default CancelButton;
