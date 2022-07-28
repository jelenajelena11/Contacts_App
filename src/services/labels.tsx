import axios from "axios";
import { useState } from "react";

export const useLabels = () => {
  const [labelList, setLabelList] = useState<any[]>([]);
  const getLabels = async () => {
    const labels = await axios.get("http://localhost:3001/labels");
    setLabelList(labels.data);
  };

  return { labelList, getLabels };
};

export const createLabel = async (data: any) => {
  try {
    await axios.post("http://localhost:3001/labels", {
      name: data.name,
    });
  } catch (error: any) {
    console.log(error);
  }
};
