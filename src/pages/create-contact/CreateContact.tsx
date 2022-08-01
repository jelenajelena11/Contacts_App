import { useEffect, useState } from "react";
import { saveNewContact } from "../../services/contact";
import { useLabels } from "../../services/hooks/useLabels";
import "../../components/forms/EditContactItem.scss";
import Button from "../../components/buttons/Button";
import { Label } from "../../interfaces/Label";

interface Props {
  setIsCreated: Function;
  isCreated: boolean;
}

function CreateContact({ setIsCreated, isCreated }: Props) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone_number: "",
    label: "",
  });
  const [profileImg, setProfileImg] = useState<any>();
  const { labelList, getLabels } = useLabels();

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setValues((values: any) => ({ ...values, [name]: value }));
  };

  const handleFile = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (values: any) => {
    saveNewContact(values, profileImg).then(() => {
      setIsCreated(!isCreated);
    });
  };

  useEffect(() => {
    getLabels();
  }, []);

  return (
    <form className="form-item__container" onSubmit={handleSubmit}>
      <h3>Create Contact</h3>
      <span>Photo</span>
      <div className="form-item__top">
        <div className="form-item__left">
          <img src={profileImg} alt="contact" />
          <label>
            <input
              type="file"
              onChange={handleFile}
              name="profile_photo"
              style={{ display: "none" }}
              accept="image/*"
            />
            Change
          </label>
        </div>
        <select
          className="form-item__select"
          onChange={handleChange}
          name="label"
          value={values.label}
        >
          <option value="" disabled>
            Labels
          </option>
          {labelList.map((label: Label) => (
            <option value={label.id} key={label.id}>
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
