import axios from "axios";
import { useState } from "react";

export const useFavorites = () => {
  const [favoriteList, setFavoriteList] = useState<any[]>([]);
  const getFavorites = async () => {
    const favorites = await axios.get("http://localhost:3001/contacts");
    setFavoriteList(favorites.data.filter((item: any) => item.isFavorite));
  };

  return { favoriteList, getFavorites };
};
