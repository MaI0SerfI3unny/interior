import { createSlice } from "@reduxjs/toolkit";
import foldersHandlers from "./generationFoldersHandlers";
import {
  getFolders,
  savePhotoToNewFolder,
  deletePhotoById,
} from "./generationFoldersOperations";

const initialState = {
  folders: [],
};

const generationFoldersSlice = createSlice({
  name: "generationFolders",
  initialState,
  reducers: {
    savePhoto: foldersHandlers.savePhoto,
  },

  extraReducers: builder => {
    builder
      .addCase(getFolders.fulfilled, foldersHandlers.getFolders)
      .addCase(savePhotoToNewFolder.fulfilled, foldersHandlers.createFolder)
      .addCase(deletePhotoById.fulfilled, foldersHandlers.deletePhoto);
  },
});

export default generationFoldersSlice.reducer;
export const { savePhoto } = generationFoldersSlice.actions;
