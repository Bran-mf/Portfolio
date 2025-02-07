import React from 'react';
import './FavoriteButton.scss';
import HeartIcon from './HearIcon';
interface IFavoriteButtonProps {
  className?: string;
  isFavorite?: boolean;
  setIsFavorite?: () => void;
}
const FavoriteButton = ({
  className,
  isFavorite,
  setIsFavorite,
}: IFavoriteButtonProps) => {
  return (
    <button className={`favorite-button ${className}`} onClick={setIsFavorite}>
      <HeartIcon
        color={isFavorite ? '#e14b64' : 'currentColor'}
        filled={isFavorite}
      />
      Favorite
    </button>
  );
};

export default FavoriteButton;
