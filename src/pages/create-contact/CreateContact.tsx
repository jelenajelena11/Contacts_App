import FormItem from "../../components/forms/FormItem";

function CreateContact() {
  const createContact = (values: any, event: any) => {
    console.log("values", values);
    event.preventDefault();
    console.log("values", values);
  };
  return (
    <FormItem
      title="Create contact"
      handleSubmit={(values: any, event: any) => createContact(values, event)}
    />
  );
}

export default CreateContact;
