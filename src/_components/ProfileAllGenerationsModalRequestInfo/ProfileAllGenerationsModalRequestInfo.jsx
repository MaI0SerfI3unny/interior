import { ProfileAllGenerationsModalRequestInfoStyles } from "./ProfileAllGenerationsModalRequestInfoStyles.styled";
import { useTranslation } from "react-i18next";
import { ReactComponent as CopyIcon } from "../../svg/copy.svg";
import { useState } from "react";
import CopiedNotification from "../CopiedNotification/CopiedNotification";
import { ReactComponent as ArrowIcon } from "../../svg/arrow.svg";

const ProfileAllGenerationsModalRequestInfo = ({ photo }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [isShowMoreInfo, setIsShowMoreInfo] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(photo.prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const showMoreKey = isShowMoreInfo
    ? "settings.hideMore"
    : "settings.loadMore";
  const isLongPrompt = photo.prompt.length >= 150;

  return (
    <>
      <ProfileAllGenerationsModalRequestInfoStyles
        $isShowMoreInfo={isShowMoreInfo}
      >
        {photo.original && (
          <div className="photo-container">
            <h3>{t("generate.yourPhoto")}</h3>
            <img src={photo.original} alt="original" />
          </div>
        )}
        <div className="text-container">
          <div className="small-container">
            <h4>{t("settings.roomStyle")}</h4>
            <p>{photo.style}</p>
          </div>
          <div className="small-container">
            <h4>{t("settings.roomType")}</h4>
            <p>{photo.room}</p>
          </div>
          <div className="prompt-container">
            <div className="prompt-header">
              <h4>Prompt</h4>
              <button type="button" onClick={handleCopy}>
                <CopyIcon width={24} height={24} />
              </button>
            </div>
            <p>
              {isShowMoreInfo
                ? photo.prompt
                : isLongPrompt
                  ? `${photo.prompt.slice(0, 150)}...`
                  : photo.prompt}
            </p>

            {isLongPrompt && (
              <button
                type="button"
                onClick={() => setIsShowMoreInfo(!isShowMoreInfo)}
              >
                {t(showMoreKey)}
                <ArrowIcon width={24} height={24} />
              </button>
            )}
          </div>
        </div>
      </ProfileAllGenerationsModalRequestInfoStyles>
      {copied && <CopiedNotification />}
    </>
  );
};

export default ProfileAllGenerationsModalRequestInfo;
