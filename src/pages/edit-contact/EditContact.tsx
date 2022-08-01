import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import Button from "../../components/buttons/Button";
import { useContacts } from "../../services/contact";
// import { useLabels } from "../../services/labels";
import "../../components/forms/FormItem.scss";
// import { Contact } from "../../interfaces/Contact";
import FormItem from "../../components/forms/FormItem";

function EditContact() {
  const { id } = useParams();
  // const { contact, getContact } = useContactById(id);
  const { getContacts, contactList } = useContacts();
  console.log(contactList, id);
  const newId = parseInt(id!, 10);
  const contToEdit = contactList.find((con) => con.id === newId);
  console.log(typeof id);
  // const { labelList, getLabels } = useLabels();
  // const navigate = useNavigate();
  // const [values, setValues] = useState({
  //   name: contact?.name || "",
  //   email: contact?.email || "",
  //   phone_number: contact?.phone_number || "",
  //   profile_photo: contact?.profile_photo || "",
  //   label: contact?.label || 0,
  // });
  // const [profileImg, setProfileImg] = useState<any>();

  // console.log(contact);
  // const [te, setTe] = useState();
  // console.log(values);

  // const handleChange = (event: any) => {
  //   console.log(event.target.value);
  //   const { name, value } = event.target;
  //   setValues((values: any) => ({ ...values, [name]: value }));
  // };

  // const handleFile = (e: any) => {
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setProfileImg(reader.result);
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };

  // const handleSelectChange = (event: any) => {
  //   console.log(event.target.value);
  //   setTe(event.target.value);
  // };

  const handleSubmit = (values: any) => {
    console.log(values);
    // updateContact(values);
  };

  useEffect(() => {
    getContacts();
    // getLabels();
    // setValues(contact);
  }, []);

  // return <FormItem title="Edit contact" handleSubmit={editContact} />;
  return (
    // <form className="form-item__container" onSubmit={handleSubmit}>
    //   <h3>Edit Contact</h3>
    //   <span>Photo</span>
    //   <div className="form-item__top">
    //     <div className="form-item__left">
    //       <img src={profileImg} alt="contact" />
    //       <label>
    //         <input
    //           type="file"
    //           onChange={handleFile}
    //           name="profile_photo"
    //           style={{ display: "none" }}
    //           accept="image/*"
    //         />
    //         Change
    //       </label>
    //     </div>
    //     <select
    //       className="form-item__select"
    //       onChange={handleChange}
    //       name="label"
    //       // value={values.label}
    //     >
    //       {labelList.map((label: any) => (
    //         <option key={label.id} value={values?.label}>
    //           {label.name}
    //         </option>
    //       ))}
    //     </select>
    //   </div>
    //   <label className="form-item__label">
    //     <span>Name:</span>
    //     <input
    //       type="text"
    //       name="name"
    //       onChange={handleChange}
    //       value={values?.name}
    //     />
    //   </label>
    //   <label className="form-item__label">
    //     <span>Email address:</span>
    //     <input
    //       type="text"
    //       name="email"
    //       onChange={handleChange}
    //       value={values?.email}
    //     />
    //   </label>
    //   <label className="form-item__label">
    //     <span>Phone number:</span>
    //     <input
    //       type="text"
    //       name="phone_number"
    //       onChange={handleChange}
    //       value={values?.phone_number}
    //     />
    //   </label>
    //   <div className="form-item__buttons">
    //     <Button
    //       buttonText="Cancel"
    //       onClick={() => navigate("/")}
    //       type="button"
    //       className="white__button"
    //     />
    //     <Button
    //       buttonText="Save"
    //       onClick={() => handleSubmit(values)}
    //       type="submit"
    //       className="blue__button"
    //     />
    //   </div>
    // </form>
    <FormItem data={contToEdit} handleSubmit={handleSubmit} />
  );
}

export default EditContact;
