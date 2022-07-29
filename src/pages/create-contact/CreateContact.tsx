import FormItem from "../../components/forms/FormItem";
import { Contact } from "../../interfaces/Contact";
import { saveNewContact } from "../../services/contact";

function CreateContact() {
  const createContact = (values: any, labelObject: any) => {
    // event.preventDefault();
    console.log("values", values, labelObject);
    saveNewContact(values, labelObject);
  };
  return (
    <FormItem
      title="Create contact"
      handleSubmit={(values: Contact, labelObject: any) =>
        createContact(values, labelObject)
      }
    />
  );
}

export default CreateContact;
