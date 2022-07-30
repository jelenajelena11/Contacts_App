import axios from "axios";
import { useState } from "react";
import { Label } from "../interfaces/Label";

export const useLabels = () => {
  const [labelList, setLabelList] = useState<Label[]>([]);
  const getLabels = async () => {
    const labels = await axios.get(process.env.REACT_APP_API_URL + `/labels`);
    setLabelList(labels.data);
  };

  return { labelList, getLabels };
};

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
