import { useEffect, useRef, useState } from 'react'
import DownloadFileContainer from './DownloadFileContainer/DownloadFileContainer'
import {
  DownloadFileInputContainer,
  DownloadFileInputStyles,
  DownloadIconContainer,
  ImagePreview,
} from './DownloadFileInputStyles.styled'
import DownloadText from './DownloadText/DownloadText'
import {ReactComponent as DownloadFileIcon} from '../../svg/upload.svg'

const DownloadFileInput = ({ value, onChange, onDeletePhoto }) => {
  const inputRef = useRef()
  const [imagePreview, setImagePreview] = useState(null)

  useEffect(() => {
    if (value) {
      const previewUrl = URL.createObjectURL(value)
      setImagePreview(previewUrl)

      return () => URL.revokeObjectURL(previewUrl)
    } else {
      setImagePreview(null)
    }
  }, [value])

  const handleFile = (file) => {
    if (file.size > 150 * 1024) {
      alert('Файл слишком большой. Максимум 150kb.')
      return
    }
    onChange(file)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    handleFile(file)
  }

  const handleInputChange = (e) => {
    const file = e.target.files[0]
    if (file) handleFile(file)
  }

  const handleClick = () => {
    inputRef.current.click()
  }

  const handleDragOver = (e) => e.preventDefault()

  return (
    <div>
      <DownloadFileContainer deleteImage={onDeletePhoto} photo={value} />

      <DownloadFileInputContainer onClick={handleClick} onDrop={handleDrop} onDragOver={handleDragOver}>
        <DownloadFileInputStyles
          type="file"
          ref={inputRef}
          accept=".jpg,.jpeg,.png"
          onChange={handleInputChange}
          name="photo"
        />

        {!value ? (
          <>
            <DownloadIconContainer>
              <DownloadFileIcon width={48} height={48} />
            </DownloadIconContainer>
            <DownloadText />
          </>
        ) : (
          <ImagePreview src={imagePreview} />
        )}
      </DownloadFileInputContainer>
    </div>
  )
}

export default DownloadFileInput