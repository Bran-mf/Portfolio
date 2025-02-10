import React, { ChangeEvent } from 'react';
import NoImageAvailable from './NoImageAvailable/NoImageAvailable';
import CustomButton from '../CustomButton/CustomButton';
import './ImageUploader.scss';
import { useImageUploader } from '../../hooks/use-image-uploader';
const ImageUploader = () => {
  const inputUploadRef = React.useRef<HTMLInputElement>(null);
  const [image, setImage] = React.useState<string>('');
  const { handleImageChange } = useImageUploader({ setImage });

  const handleButtonClick = () => {
    if (inputUploadRef.current) {
      inputUploadRef.current.click();
    }
  };
  const handleUploadImage = (event : ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if(!file) return ;
    handleImageChange(file);
  }

  return (
    <div className="image-uploader">
      <input
        type="file"
        accept="image/*"
        hidden
        ref={inputUploadRef}
        onChange={handleUploadImage}
      />
      {image && (
        <img
          src={image}
          alt="restaurant image"
          className="image-uploader__image"
        />
      )}
      {!image && (
        <NoImageAvailable className={'image-uploader__no-image-panel'} 
        handleUploadImage={handleImageChange} />
      )}

      <CustomButton
        text={'Upload Image'}
        onClick={handleButtonClick}
        className="image-uploader__button"
      />
    </div>
  );
};
export default ImageUploader;
