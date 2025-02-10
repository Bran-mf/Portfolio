import React from 'react';
import './NoImageAvailable.scss';
interface INoImageAvailableProps {
  className: string;
  handleUploadImage: (file: File) => void;
}
const NoImageAvailable = ({
  className,
  handleUploadImage,
}: INoImageAvailableProps) => {
  const [style, setStyle] = React.useState('');

  // add events drag anddrove
  const handleDragOver = (event: React.DragEvent) => {
    setStyle('no-image-available--drag-over');

    event.preventDefault();
  };
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleUploadImage(file);
  };
  const handleDragLeave = () => setStyle('');

  return (
    <div
      className={`no-image-available ${style} ${className}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
    >
      <h1 className="no-image-available__title">No image selected</h1>
      <h2 className="no-image-available__subtitle">
        Click the button below to select an image, or drag and drop an image
        here
      </h2>
    </div>
  );
};

export default NoImageAvailable;
