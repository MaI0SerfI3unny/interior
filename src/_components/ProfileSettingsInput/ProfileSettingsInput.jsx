import { ProfileSettingsInputStyles } from "./ProfileSettingsInputStyles.styled";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

const ProfileSettingsInput = ({
  isChanging,
  setIsChanging,
  title,
  changingTitle,
  description,
  inputName,
  value,
  handleSubmit,
}) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState(value);

  const inputRef = useRef();

  const changeButton = "settings.changeButton";
  const cancelButton = "settings.cancelButton";

  return (
    <ProfileSettingsInputStyles>
      {isChanging && (
        <div className="change-container">
          <h4>{t(changingTitle)}</h4>
          <p className="description">{t(description)}</p>
        </div>
      )}
      <div className="input-container">
        <h3>{t(title)}</h3>
        {!isChanging && <p className="placeholder">{value}</p>}
        <div className="input-btn-wrapper">
          {isChanging && (
            <>
              <input
                ref={inputRef}
                disabled={!isChanging}
                name={inputName}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
              />

              <button
                type="button"
                className="save-btn"
                onClick={() => handleSubmit(inputRef.current.value)}
              >
                {t("settings.saveBtn")}
              </button>
            </>
          )}
        </div>
      </div>
      <button
        className="changing-btn"
        type="button"
        onClick={() => setIsChanging(!isChanging)}
      >
        {isChanging ? t(cancelButton) : t(changeButton)}
      </button>
      <hr />
    </ProfileSettingsInputStyles>
  );
};

export default ProfileSettingsInput;
