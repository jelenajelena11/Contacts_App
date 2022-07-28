import "./Button.scss";

interface Props {
  buttonText: string;
  onClick: () => void;
  type: "reset" | "button" | "submit";
}

export default function Button({
  buttonText,
  onClick = () => {},
  type,
}: Props) {
  return (
    <button onClick={onClick} type={type} className="button">
      {buttonText}
    </button>
  );
}
