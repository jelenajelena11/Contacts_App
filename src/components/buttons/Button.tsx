import "./Button.scss";

interface Props {
  buttonText: string;
  onClick: any;
  type: "reset" | "button" | "submit";
  className: string;
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
