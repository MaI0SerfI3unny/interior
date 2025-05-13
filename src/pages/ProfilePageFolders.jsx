import { ProfilePageContainer } from "@/_components/ProfilePageContainer/ProfilePageContainer";
import { ProfileNavbar } from "@/_components/ProfileNavbar/ProfileNavbar";
import MainContainer from "../_components/MainContainer/MainContainer";
import { ProfileFolderListContainer } from "../_components/ProfileFolderListContainer/ProfileFolderListContainer";
import ProfileAllGenerationsContainer from "../_components/ProfileAllGenerationsContainer/ProfileAllGenerationsContainer";
import { useSelector } from "react-redux";
import { getGenerationFolders } from "../redux/generationFolders/generationFoldersSelectors";

export const ProfilePageFolders = () => {
  const folders = useSelector(getGenerationFolders);

  return (
    <ProfilePageContainer>
      <MainContainer>
        <ProfileNavbar />
        {!!folders.length && (
          <>
            <ProfileFolderListContainer folders={folders} />
            <ProfileAllGenerationsContainer folders={folders} />
          </>
        )}

        {!folders.length && (
          <p>Ви ще не зберігли жодного результату до каталогу</p>
        )}
      </MainContainer>
    </ProfilePageContainer>
  );
};
