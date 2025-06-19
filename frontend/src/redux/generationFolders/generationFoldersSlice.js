import { createSlice } from "@reduxjs/toolkit";
import foldersHandlers from "./generationFoldersHandlers";
import {
  getFolders,
  savePhotoToNewFolder,
  deletePhotoById,
  savePhotoToFolder,
} from "./generationFoldersOperations";

const initialState = {
  folders: [],
};

const generationFoldersSlice = createSlice({
  name: "generationFolders",
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getFolders.fulfilled, foldersHandlers.getFolders)
      .addCase(savePhotoToNewFolder.fulfilled, foldersHandlers.createFolder)
      .addCase(savePhotoToFolder.fulfilled, foldersHandlers.savePhoto)
      .addCase(deletePhotoById.fulfilled, foldersHandlers.deletePhoto);
  },
});

export default generationFoldersSlice.reducer;
