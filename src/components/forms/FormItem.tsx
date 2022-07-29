import { useEffect, useState } from "react";
import { Label } from "../../interfaces/Label";
import { useLabels } from "../../services/labels";
import Button from "../buttons/button/Button";
import CancelButton from "../buttons/cancel/CancelButton";
import "./FormItem.scss";

interface Props {
  title: string;
  handleSubmit: any;
}

function FormItem({ title, handleSubmit }: Props) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone_number: "",
    label: { id: "", name: "" },
  });
  const { labelList, getLabels } = useLabels();
  const [te, setTe] = useState();

  const handleChange = (event: any) => {
    console.log(event.target.value);
    const newItemState = {
      ...values,
      [event.target.name]: event.target.value,
    };
    setValues(newItemState);
    console.log(newItemState);
  };

  const handleFile = (e: any) => {
    const { profilePhoto } = e.target.files[0].name;
    console.log(profilePhoto);
  };

  const handleSelectChange = (event: any) => {
    console.log(event.target.value);
    setTe(event.target.value);
  };

  useEffect(() => {
    getLabels();
  }, []);

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   console.log(values);
  // };

  return (
    <form className="form-item__container" onSubmit={handleSubmit}>
      <h3>{title}</h3>
      <span>Photo</span>
      <div className="form-item__top">
        <div className="form-item__left">
          <img src="" alt="contact" />
          <button onChange={handleFile} type="button">
            Change
            <input type="file" style={{ display: "none" }} />
          </button>
        </div>
        {/* <div className="form-item__labels"> */}
        <select className="form-item__select" onChange={handleSelectChange}>
          {labelList.map((label: Label) => (
            <option key={label.id} value={label.name}>
              {label.name}
            </option>
          ))}
        </select>
        {/* </div> */}
      </div>
      <label className="form-item__label">
        <span>Name:</span>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
      </label>
      <label className="form-item__label">
        <span>Email address:</span>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
      </label>
      <label className="form-item__label">
        <span>Phone number:</span>
        <input
          type="text"
          name="phone_number"
          onChange={handleChange}
          value={values.phone_number}
        />
      </label>
      <div className="form-item__buttons">
        <CancelButton onClick={() => {}} />
        <Button
          buttonText="Create"
          onClick={() => handleSubmit(values, te)}
          type="button"
        />
      </div>
    </form>
  );
}

export default FormItem;
