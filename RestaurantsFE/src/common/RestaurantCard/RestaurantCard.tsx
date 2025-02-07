import React from 'react';
import './RestaurantCard.scss';
import CustomButton from '../CustomButton/CustomButton';
const RestaurantCard = () => {
  return (
    <div>
      <div className="restaurant-card">
        <div className="restaurant-card__image">
          <img src="https://picsum.photos/100" alt="restaurant" />
        </div>
        <div className="restaurant-card__info">
          <h3 className="restaurant-card__title">Restaurant Name</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <p className="restaurant-card__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            aliquam blanditiis ad optio quia veritatis alias nam debitis
            officiis.
          </p>
          <div className="restaurant-card__features">
            <span className="restaurant-card__pill">
              vigilance
            </span>
            <span className="restaurant-card__pill">delivery</span>
          </div>
        </div>
        <CustomButton className='restaurant-card__button' text="View" onClick={console.log}/>
      </div>
    </div>
  );
};

export default RestaurantCard;
