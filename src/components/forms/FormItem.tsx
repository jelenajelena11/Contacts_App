import { useState } from "react";
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
  });

  const handleChange = (event: any) => {
    const newItemState = {
      ...values,
      [event.target.name]: event.target.value,
    };
    setValues(newItemState);
  };

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
          <button type="button">Change</button>
        </div>
        {/* <div className="form-item__labels"> */}
        <select
          value="labels"
          className="form-item__select"
          onChange={handleChange}
        >
          <option value="labels">Labels</option>
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
          onClick={() => handleSubmit(values)}
          type="button"
        />
      </div>
    </form>
  );
}

export default FormItem;
