import { useEffect, useRef, useState } from "react";
import DownloadFileContainer from "./DownloadFileContainer/DownloadFileContainer";
import {
  DownloadFileInputContainer,
  DownloadFileInputStyles,
  DownloadIconContainer,
  ImagePreview,
  UploadPhoto,
} from "./DownloadFileInputStyles.styled";
import DownloadText from "./DownloadText/DownloadText";
import { ReactComponent as DownloadFileIcon } from "../../svg/upload.svg";
import { ReactComponent as ClipIcon } from "../../svg/attachment.svg";
import { useTranslation } from "react-i18next";

const DownloadFileInput = ({ value, onChange, onDeletePhoto }) => {
  const inputRef = useRef();
  const [imagePreview, setImagePreview] = useState(null);
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (value) {
      const previewUrl = URL.createObjectURL(value);
      setImagePreview(previewUrl);

      return () => URL.revokeObjectURL(previewUrl);
    } else {
      setImagePreview(null);
    }
  }, [value]);

  const handleFile = file => {
    if (file.size > 150 * 1024) {
      alert("Файл слишком большой. Максимум 150kb.");
      return;
    }
    onChange(file);
  };

  const handleDrop = e => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDeletePhoto = () => {
    onDeletePhoto();
    if (inputRef.current) {
      inputRef.current.value = null;
    }
  };

  const handleInputChange = e => {
    const file = e.target.files[0];
    if (file) handleFile(file);
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleDragOver = e => e.preventDefault();

  return (
    <div>
      <DownloadFileContainer deleteImage={handleDeletePhoto} photo={value} />

      <DownloadFileInputContainer
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <DownloadFileInputStyles
          type="file"
          ref={inputRef}
          accept=".jpg,.jpeg,.png"
          onChange={handleInputChange}
          name="original"
        />

        {!value ? (
          <>
            <DownloadIconContainer>
              <DownloadFileIcon width={48} height={48} />
            </DownloadIconContainer>
            <DownloadText />
          </>
        ) : (
          <div
            className="img-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ImagePreview src={imagePreview} />

            <UploadPhoto $isHovered={isHovered}>
              <ClipIcon width={24} height={24} />
              <p>{t("generate.downloadNewPhoto")}</p>
            </UploadPhoto>
          </div>
        )}
      </DownloadFileInputContainer>
    </div>
  );
};

export default DownloadFileInput;
