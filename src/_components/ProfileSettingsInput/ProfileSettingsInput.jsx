import { ProfileSettingsInputStyles } from "./ProfileSettingsInputStyles.styled";
import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";
import SmallSpinner from "../../SmallSpinner/SmallSpinner";

const ProfileSettingsInput = ({
  isChanging,
  setIsChanging,
  title,
  changingTitle,
  description,
  inputName,
  initialValue,
  handleSubmit,
  isLoading,
}) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState(initialValue);

  const inputRef = useRef();

  const changeButton = "settings.changeButton";
  const cancelButton = "settings.cancelButton";

  useEffect(() => {
    if (isChanging) {
      setInputValue(initialValue);
    }
  }, [initialValue, isChanging]);

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
        {!isChanging && <p className="placeholder">{initialValue}</p>}
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
                disabled={isLoading}
              >
                {isLoading ? <SmallSpinner /> : t("settings.saveBtn")}
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
