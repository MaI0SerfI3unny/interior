import { ProfilePageContainer } from "@/_components/ProfilePageContainer/ProfilePageContainer";
import { ProfileNavbar } from "@/_components/ProfileNavbar/ProfileNavbar";
import MainContainer from "../_components/MainContainer/MainContainer";
import { ProfileFolderListContainer } from "../_components/ProfileFolderListContainer/ProfileFolderListContainer";
import ProfileAllGenerationsContainer from "../_components/ProfileAllGenerationsContainer/ProfileAllGenerationsContainer";
import photo from "@/assets/profile/photo_folder.png";
import { useState } from "react";

const list_folder = [
  {
    title: "Кухня",
    photos: [
      { id: 1, photo },
      { id: 2, photo },
      { id: 3, photo },
      { id: 4, photo },
      { id: 5, photo },
    ],
  },
  {
    title: "Кухня",
    photos: [
      { id: 6, photo },
      { id: 7, photo },
    ],
  },
  {
    title: "Кухня",
    photos: [
      { id: 8, photo },
      { id: 9, photo },
    ],
  },
  {
    title: "Кухня",
    photos: [{ id: 10, photo }],
  },
  {
    title: "Кухня",
    photos: [
      { id: 11, photo },
      { id: 12, photo },
      { id: 13, photo },
      { id: 14, photo },
      { id: 15, photo },
    ],
  },
];

export const ProfilePageFolders = () => {
  const [folders] = useState(list_folder);
  return (
    <ProfilePageContainer>
      <MainContainer>
        <ProfileNavbar />
        {!!folders.length && (
          <>
            <ProfileFolderListContainer folders={list_folder} />
            <ProfileAllGenerationsContainer folders={list_folder} />
          </>
        )}

        {!folders.length && (
          <p>Ви ще не зберігли жодного результату до каталогу</p>
        )}
      </MainContainer>
    </ProfilePageContainer>
  );
};
