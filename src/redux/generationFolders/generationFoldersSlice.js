import { createSlice } from "@reduxjs/toolkit";
import foldersHandlers from "./generationFoldersHandlers";
import {
  getFolders,
  savePhotoToNewFolder,
} from "./generationFoldersOperations";

const initialState = {
  folders: [],
};

const generationFoldersSlice = createSlice({
  name: "generationFolders",
  initialState,
  reducers: {
    savePhoto: foldersHandlers.savePhoto,
    deletePhoto: foldersHandlers.deletePhoto,
  },

  extraReducers: builder => {
    builder
      .addCase(getFolders.fulfilled, foldersHandlers.getFolders)
      .addCase(savePhotoToNewFolder.fulfilled, foldersHandlers.createFolder);
  },
});

export default generationFoldersSlice.reducer;
export const { deletePhoto, savePhoto, createFolder } =
  generationFoldersSlice.actions;
