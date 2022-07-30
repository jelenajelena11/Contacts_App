import "./Button.scss";

interface Props {
  buttonText: string;
  onClick: () => void;
  type: "reset" | "button" | "submit";
  className: any;
}

export default function Button({
  buttonText,
  onClick = () => {},
  type,
  className,
}: Props) {
  return (
    <button onClick={onClick} type={type} className={className}>
      {buttonText}
    </button>
  );
}
