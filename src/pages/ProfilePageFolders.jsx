import { ProfilePageContainer } from "@/_components/ProfilePageContainer/ProfilePageContainer";
import { ProfileNavbar } from "@/_components/ProfileNavbar/ProfileNavbar";
import MainContainer from "../_components/MainContainer/MainContainer";
import { ProfileFolderListContainer } from "../_components/ProfileFolderListContainer/ProfileFolderListContainer";
import ProfileAllGenerationsContainer from "../_components/ProfileAllGenerationsContainer/ProfileAllGenerationsContainer";
import { useSelector } from "react-redux";
import { getGenerationFolders } from "../redux/generationFolders/generationFoldersSelectors";
import ProfileGenerationsEmptyGenerations from "../_components/ProfileGenerationsEmptyGenerations/ProfileGenerationsEmptyGenerations";

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

        {!folders.length && <ProfileGenerationsEmptyGenerations />}
      </MainContainer>
    </ProfilePageContainer>
  );
};
