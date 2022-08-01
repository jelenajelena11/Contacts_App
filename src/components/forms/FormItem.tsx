import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useLabels } from "../../services/labels";
import Button from "../buttons/Button";
import "./FormItem.scss";
import "../buttons/Button.scss";

function FormItem({ data, handleSubmit }: any) {
  const { labelList, getLabels } = useLabels();
  const [profileImg, setProfileImg] = useState<any>();
  const [values, setValues] = useState({
    name: data?.name || "",
    email: data?.email || "",
    phone_number: data?.phone_number || "",
    profile_photo: data?.profile_photo || "",
    label: data?.label || 0,
  });

  const handleFile = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setValues((values: any) => ({ ...values, [name]: value }));
  };

  const cancelEdit = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    getLabels();
    // getLabel();
    setValues(data);
    setProfileImg(data?.profile_photo);
  }, [data]);

  return (
    <form className="form-item__container" onSubmit={handleSubmit}>
      <h3>Edit Contact</h3>
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
          value={values?.label}
        >
          {labelList.map((label: any) => (
            <option key={label.id} value={label?.id}>
              {label?.name}
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
          value={values?.name}
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
          onClick={() => cancelEdit(values)}
          type="button"
          className="white__button"
        />
        <Button
          buttonText="Save"
          onClick={(event: any) => handleSubmit(values, event, profileImg)}
          type="submit"
          className="blue__button"
        />
      </div>
    </form>
  );
}

export default FormItem;
