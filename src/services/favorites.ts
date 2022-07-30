import axios from "axios";
import { useState } from "react";
import { Contact } from "../interfaces/Contact";

export const useFavorites = () => {
  const [favoriteList, setFavoriteList] = useState<Contact[]>([]);
  const getFavorites = async () => {
    const favorites = await axios.get(
      process.env.REACT_APP_API_URL + `/contacts`,
    );
    setFavoriteList(favorites.data.filter((item: Contact) => item.isFavorite));
  };

  return { favoriteList, getFavorites };
};
