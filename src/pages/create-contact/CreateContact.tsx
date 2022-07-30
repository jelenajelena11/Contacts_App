import { useEffect, useState } from "react";
// import FormItem from "../../components/forms/FormItem";
// import { Contact } from "../../interfaces/Contact";
// import { saveNewContact } from "../../services/contact";
import { useLabels } from "../../services/labels";
import "../../components/forms/FormItem.scss";
import Button from "../../components/buttons/Button";

function CreateContact() {
  // const createContact = (values: any, labelObject: any) => {
  //   // event.preventDefault();
  //   console.log("values", values, labelObject);
  //   saveNewContact(values, labelObject);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone_number: "",
    label: "",
  });
  const { labelList, getLabels } = useLabels();
  // const [te, setTe] = useState();

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

  // const handleSelectChange = (event: any) => {
  //   console.log(event.target.value);
  //   setTe(event.target.value);
  // };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    getLabels();
  }, []);

  // };
  return (
    // <FormItem
    //   title="Create contact"
    //   handleSubmit={(values: Contact, labelObject: any) =>
    //     createContact(values, labelObject)
    //   }
    // />
    <form className="form-item__container" onSubmit={handleSubmit}>
      <h3>Create Contact</h3>
      <span>Photo</span>
      <div className="form-item__top">
        <div className="form-item__left">
          <img src="" alt="contact" />
          <button onChange={handleFile} type="button">
            Change
            <input type="file" style={{ display: "none" }} />
          </button>
        </div>
        <select
          className="form-item__select"
          onChange={handleChange}
          name="label"
          value={values.label}
        >
          {labelList.map((label: any) => (
            <option key={label.id} value={label.id}>
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
        <Button
          buttonText="Cancel"
          onClick={() => {}}
          type="button"
          className="white__button"
        />
        <Button
          buttonText="Create"
          onClick={() => handleSubmit(values)}
          type="button"
          className="blue__button"
        />
      </div>
    </form>
  );
}

export default CreateContact;
