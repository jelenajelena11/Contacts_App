import "./Button.scss";

interface Props {
  buttonText: string;
  onClick: () => void;
}

export default function Button({ buttonText, onClick = () => {} }: Props) {
  return (
    <button onClick={onClick} type="button" className="button">
      {buttonText}
    </button>
  );
}
