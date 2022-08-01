import axios from "axios";
import { Label } from "../interfaces/Label";

export const createLabel = async (label: Label) => {
  try {
    await axios.post(process.env.REACT_APP_API_URL + `/labels`, {
      name: label,
      contacts: [],
    });
  } catch (error: any) {
    console.log(error);
  }
};
