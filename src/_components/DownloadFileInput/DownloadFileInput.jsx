import  {  useRef, useState } from "react";
import { ReactComponent as DownloadFileIcon } from '../../svg/file-upload-line.svg';
import { DownloadIconContainer, DownloadFileInputContainer, DownloadFileInputStyles, ImagePreview  } from './DownloadFileInputStyles.styled';
import DownloadText from "./DownloadText/DownloadText";
import DownloadFileContainer from "./DownloadFileContainer/DownloadFileContainer";

const DownloadFileInput = ({ onChange, value, onDeletePhoto }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const inputRef = useRef();

 

  const deleteImage = () => {
    inputRef.value = '';
    onDeletePhoto();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file.size > 150 * 1024) {
      alert("Файл слишком большой. Максимум 150kb.");
      return;
    }


    if (file) {
      onChange({target : {value : file, name : 'photo'}});
      setImagePreview(URL.createObjectURL(file)); 
    }
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFile(file);

    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <DownloadFileContainer deleteImage={deleteImage} photo={value} />


      <DownloadFileInputContainer
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <DownloadFileInputStyles
          type="file"
          ref={inputRef}
          accept=".jpg,.jpeg,.png,.gif,.pdf,.zip"
          onChange={handleInputChange}
          name="photo" 
        />
        {!value ? (
          <>
            <DownloadIconContainer>
              <DownloadFileIcon width={28} height={28} />
            </DownloadIconContainer>
            <DownloadText />
          </>
        ) : <ImagePreview src={imagePreview} />}
      </DownloadFileInputContainer>
    </div>
  );
};

export default DownloadFileInput;



