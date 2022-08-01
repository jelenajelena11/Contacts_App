import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Label } from "../../interfaces/Label";
import { useLabels } from "../../services/labels";
import Button from "../buttons/Button";
import "./FormItem.scss";
import "../buttons/Button.scss";

// interface Props {
//   title: string;
//   handleSubmit: any;
// }

function FormItem({ data, handleSubmit }: any) {
  console.log(data);
  // const { id } = useParams();
  // const { contact, getContact } = useContactById(id);
  const { labelList, getLabels } = useLabels();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: data?.name || "",
    email: data?.email || "",
    phone_number: data?.phone_number || "",
    profile_photo: data?.profile_photo || "",
    label: data?.label || 0,
  });

  // const [profileImg, setProfileImg] = useState<any>(values.profile_photo);

  // console.log(contact);

  const handleFile = (e: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        // setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // const handleSelectChange = (event: any) => {
  //   console.log(event.target.value);
  //   setTe(event.target.value);
  // };

  const handleChange = (event: any) => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    setValues((values: any) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    // getContact();
    getLabels();
  }, []);

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   console.log(values);
  // };

  return (
    <form className="form-item__container" onSubmit={handleSubmit}>
      <h3>Edit Contact</h3>
      <span>Photo</span>
      <div className="form-item__top">
        <div className="form-item__left">
          <img src={data?.profile_photo} alt="contact" />
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
          value={data?.label}
        >
          {labelList.map((label: any) => (
            <option key={label.id} value={label.name}>
              {data?.label}
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
          onClick={() => navigate("/")}
          type="button"
          className="white__button"
        />
        <Button
          buttonText="Save"
          onClick={() => handleSubmit(data)}
          type="submit"
          className="blue__button"
        />
      </div>
    </form>
  );
}

export default FormItem;
