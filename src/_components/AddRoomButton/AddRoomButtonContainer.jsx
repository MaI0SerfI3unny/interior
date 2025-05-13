import { ReactComponent as PlusIcon } from "../../svg/plus.svg";
import { useTranslation } from "react-i18next";
import { AddRoomContanerStyles } from "./AddRoomContainerStyles.styled";

const AddRoomButtonContainer = ({ handleCreateFolder }) => {
  const { t } = useTranslation();
  return (
    <AddRoomContanerStyles>
      <button onClick={() => handleCreateFolder(true)}>
        <PlusIcon width={16} height={16} />
      </button>

      <h2>{t("modal.createFolder")}</h2>
    </AddRoomContanerStyles>
  );
};

export default AddRoomButtonContainer;
