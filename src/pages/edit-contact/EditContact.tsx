import { useEffect } from "react";
import { useParams } from "react-router-dom";
import FormItem from "../../components/forms/FormItem";
import { useContactById } from "../../services/contact";

function EditContact() {
  const { id } = useParams();
  const { contact, getContact } = useContactById(id);

  console.log(contact);

  useEffect(() => {
    getContact();
  }, []);

  const editContact = () => {};
  return <FormItem title="Edit contact" handleSubmit={editContact} />;
}

export default EditContact;
