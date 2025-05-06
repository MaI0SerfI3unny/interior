import { ReactComponent as PlusIcon } from "../../svg/plus.svg";
import { useTranslation } from "react-i18next";
import { AddRoomContanerStyles } from "./AddRoomContainerStyles.styled";

const AddRoomContainer = () => {
  const { t } = useTranslation();
  return (
    <AddRoomContanerStyles>
      <button>
        <PlusIcon width={16} height={16} />
      </button>

      <h2>{t("modal.createFolder")}</h2>
    </AddRoomContanerStyles>
  );
};

export default AddRoomContainer;
