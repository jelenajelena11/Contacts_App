import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { updateContact } from "../../services/contact";
import { useContactById } from "../../services/hooks/useContacts";
import EditContactItem from "../../components/forms/EditContactItem";
import { Contact } from "../../interfaces/Contact";

function EditContact() {
  const { id } = useParams();
  const { contact, getContact } = useContactById(id);

  const handleSubmit = (values: Contact, event: Event, profileImg: string) => {
    event.preventDefault();
    updateContact(values, profileImg);
  };

  useEffect(() => {
    getContact();
  }, []);

  return <EditContactItem data={contact} handleSubmit={handleSubmit} />;
}

export default EditContact;
