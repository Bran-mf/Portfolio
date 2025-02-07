import React, { useState } from 'react';
import { useParams } from 'react-router';
import '../../index.scss';
import img from '../../assets/images/restaurant1.jpg';
import './RestaurantPage.scss';
import CustomButton from '../../common/CustomButton/CustomButton';
import FavoriteButton from '../../common/FavoriteButton/FavoriteButton';
const RestaurantPage = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleIsFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="container restaurant-page">
      <div className="restaurant-page__header">
        <img
          className="restaurant-page__restaurant-image"
          src={img}
          alt="restaurant image"
        />
        <FavoriteButton
          className="restaurant-page__favorite-button"
          isFavorite={isFavorite}
          setIsFavorite={toggleIsFavorite}
        />
      </div>

      <div className="restaurant-info">
        <div className="restaurant-info__header">
          <h1 className="restaurant-info__name">La Bella Vita</h1>
          <p className="restaurant-info__rating">
            ⭐⭐⭐⭐⭐ 4.9 (1,245 Reviews)
          </p>
        </div>
        <p className="restaurant-info__description">
          A charming Italian restaurant offering authentic, handcrafted pasta,
          wood-fired pizzas, and a selection of fine wines. Inspired by the
          flavors of Tuscany, we bring you a warm, rustic atmosphere perfect for
          romantic dinners, family gatherings, and celebrations.
        </p>
        <div className="restaurant-info__details">
          <p>Location: 123 Main Street, New York, NY 10001</p>
          <p>Phone: (555) 123-4567</p>
          <p>
            Features: Cozy • Romantic • Authentic • Fine Dining • Wine Selection
            • Live Music • Outdoor Seating
          </p>
        </div>
      </div>
      <div className="space-availability">
        <div className="space-availability__header">
          <h2 className="space-availability__title">Space availability</h2>
          <span className="space-availability__availability">33/34</span>
        </div>

        <div>
          <h3 className="space-availability__sub-title">
            {' '}
            Real-Time Availability Demo
          </h3>
          <p className="space-availability__description">
            Availability updates in real-time! Feel free to test it—open this
            page in a private/incognito tab and see how the availability changes
            when you press the button. Try it now and experience live updates in
            action! 🚀
          </p>
        </div>

        <CustomButton
          className="space-availability__button"
          onClick={() => console.log('button clicked')}
          text="Book Now"
          type="cta"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
