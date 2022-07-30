import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/buttons/Button";
import { useContactById } from "../../services/contact";
import { useLabels } from "../../services/labels";
import "../../components/forms/FormItem.scss";

function EditContact() {
  const { id } = useParams();
  const { contact, getContact } = useContactById(id);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: contact?.name || "",
    email: contact?.email || "",
    phone_number: contact?.phone_number || "",
    label: contact?.label,
  });
  const { labelList, getLabels } = useLabels();
  // const [te, setTe] = useState();

  console.log(values);

  const handleChange = (event: any) => {
    // console.log(event.target.value);
    // const newItemState = {
    //   ...values,
    //   [event.target.name]: event.target.value,
    // };
    // setValues(newItemState);
    console.log(event.target.value);
    const { name, value } = event.target;
    setValues((values: any) => ({ ...values, [name]: value }));
  };

  const handleFile = (e: any) => {
    const { profilePhoto } = e.target.files[0].name;
    console.log(profilePhoto);
  };

  // const handleSelectChange = (event: any) => {
  //   console.log(event.target.value);
  //   setTe(event.target.value);
  // };

  const handleSubmit = (values: any, event: any) => {
    event.preventDefault();
    console.log(values);
  };

  useEffect(() => {
    getContact();
    getLabels();
  }, []);

  // return <FormItem title="Edit contact" handleSubmit={editContact} />;
  return (
    <form
      className="form-item__container"
      onSubmit={(event: any) => handleSubmit(values, event)}
    >
      <h3>Edit Contact</h3>
      <span>Photo</span>
      <div className="form-item__top">
        <div className="form-item__left">
          <img src={contact?.profile_photo} alt="contact" />
          <button onChange={handleFile} type="button">
            Change
            <input type="file" style={{ display: "none" }} />
          </button>
        </div>
        <select
          className="form-item__select"
          onChange={handleChange}
          name="label"
        >
          {labelList.map((label: any) => (
            <option key={label.id} value={values?.label}>
              {label.name}
            </option>
          ))}
        </select>
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
          value={values?.email}
        />
      </label>
      <label className="form-item__label">
        <span>Phone number:</span>
        <input
          type="text"
          name="phone_number"
          onChange={handleChange}
          value={values?.phone_number}
        />
      </label>
      <div className="form-item__buttons">
        <Button
          buttonText="Cancel"
          onClick={() => navigate("/")}
          type="button"
          className="white__button"
        />
        <Button
          buttonText="Create"
          onClick={() => {}}
          type="submit"
          className="blue__button"
        />
      </div>
    </form>
  );
}

export default EditContact;
