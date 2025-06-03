const savePhoto = (state, { payload }) => {
  const { data, folderId } = payload;
  state.folders = state.folders.map(fold =>
    fold.id === folderId
      ? { ...fold, photos: [...fold.photos, data] }
      : { ...fold }
  );
};

const createFolder = (state, { payload }) => {
  state.folders = [...state.folders, payload];
};

const deletePhoto = (state, { payload }) => {
  const { folderId, photoId } = payload;

  const updatedFolders = state.folders
    .map(folder => {
      if (folder.id !== folderId) return folder;

      const newPhotos = folder.photos.filter(photo => photo.id !== photoId);

      if (newPhotos.length === 0) return null;

      return { ...folder, photos: newPhotos };
    })
    .filter(Boolean);

  state.folders = [...updatedFolders];
};

const getFolders = (state, { payload }) => {
  state.folders = payload;
};

export default {
  savePhoto,
  deletePhoto,
  createFolder,
  getFolders,
};
