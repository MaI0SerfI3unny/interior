let currentFolderId = 6;
let currentPhotoId = 100;

const savePhoto = (state, { payload }) => {
  state.folders = state.folders.reduce(
    (acc, folder) =>
      folder.id === payload.folderId
        ? [
            ...acc,
            {
              ...folder,
              photos: [
                ...folder.photos,
                { ...payload.photo, id: currentPhotoId },
              ],
            },
          ]
        : [...acc, { ...folder }],
    []
  );

  currentPhotoId += 1;
};

const createFolder = (state, { payload }) => {
  state.folders = [...state.folders, payload];
};

const deletePhoto = (state, { payload }) => {
  const updatedFolders = state.folders
    .map(folder => {
      const newPhotos = folder.photos.filter(
        photo => photo.id !== payload.photoId
      );

      if (newPhotos.length === folder.photos.length) return folder;

      return { ...folder, photos: newPhotos };
    })
    .filter(folder => folder.photos.length > 0);

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
