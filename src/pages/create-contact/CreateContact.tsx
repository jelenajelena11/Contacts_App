import FormItem from "../../components/forms/FormItem";
import { Contact } from "../../interfaces/Contact";
import { saveNewContact } from "../../services/contact";

function CreateContact() {
  const createContact = (values: any) => {
    // event.preventDefault();
    // console.log("values", values);
    saveNewContact(values);
  };
  return (
    <FormItem
      title="Create contact"
      handleSubmit={(values: Contact) => createContact(values)}
    />
  );
}

export default CreateContact;
