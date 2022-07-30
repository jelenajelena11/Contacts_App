import { useState } from "react";

export const useDeleteDialog = () => {
  const [isShowingDelete, setIsShowingDelete] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState<number | undefined>();

  function toggleDelete(id: number) {
    setIsShowingDelete(!isShowingDelete);
    setDeleteItemId(id);
  }

  return {
    isShowingDelete,
    toggleDelete,
    deleteItemId,
  };
};
