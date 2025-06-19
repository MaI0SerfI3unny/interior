import { UpgradeButtonStyles } from "./UpgradeButtonStyles.styled";
import { useTranslation } from "react-i18next";
import GeneralModal from "../../../GeneralModal/GeneralModal";
import ProfileSubscribeChangePlanModal from "../../../ProfileSubscribeChangePlanModal/ProfileSubscribeChangePlanModal";
import { useState } from "react";

const UpgradeButton = () => {
  const { t } = useTranslation();
  const [isShowModal, setIsShowModal] = useState(false);
  return (
    <>
      <UpgradeButtonStyles onClick={() => setIsShowModal(true)}>
        {t("generate.btnUpgrade")}
      </UpgradeButtonStyles>

      {isShowModal && (
        <GeneralModal toggleModal={setIsShowModal}>
          <ProfileSubscribeChangePlanModal
            toggleModal={() => setIsShowModal(false)}
          />
        </GeneralModal>
      )}
    </>
  );
};

export default UpgradeButton;
