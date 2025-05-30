import { createSlice } from "@reduxjs/toolkit";
import foldersHandlers from "./generationFoldersHandlers";
import { getFolders } from "./generationFoldersOperations";

const initialState = {
  folders: [],
};

const generationFoldersSlice = createSlice({
  name: "generationFolders",
  initialState,
  reducers: {
    savePhoto: foldersHandlers.savePhoto,
    deletePhoto: foldersHandlers.deletePhoto,
    createFolder: foldersHandlers.createFolder,
  },

  extraReducers: builder => {
    builder.addCase(getFolders.fulfilled, foldersHandlers.getFolders);
  },
});

export default generationFoldersSlice.reducer;
export const { deletePhoto, savePhoto, createFolder } =
  generationFoldersSlice.actions;
