import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateContact, useContactById } from "../../services/contact";
import "../../components/forms/FormItem.scss";
import FormItem from "../../components/forms/FormItem";

function EditContact() {
  const { id } = useParams();
  const { contact, getContact } = useContactById(id);

  const handleSubmit = (values: any, event: any, profileImg: any) => {
    event.preventDefault();
    console.log(values);
    updateContact(values, profileImg);
  };

  useEffect(() => {
    getContact();
  }, []);

  return <FormItem data={contact} handleSubmit={handleSubmit} />;
}

export default EditContact;
