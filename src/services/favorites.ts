import axios from "axios";
import { useState } from "react";

export const useFavorites = () => {
  const [favoriteList, setFavoriteList] = useState<any[]>([]);
  const favoritesList: any[] = [];
  const getFavorites = async () => {
    const favorites = await axios.get("http://localhost:3001/contacts");

    favorites.data.map((f: any) => {
      if (f.isFavorite) {
        favoritesList.push(f);
        setFavoriteList(favoritesList);
      } else {
        setFavoriteList(favoriteList);
      }
      return favoriteList;
    });
  };

  return { favoriteList, getFavorites };
};
