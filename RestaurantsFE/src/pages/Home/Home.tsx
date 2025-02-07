import React from 'react';
import '../../index.scss';
import './Home.scss';
import RestaurantCard from '../../common/RestaurantCard/RestaurantCard';
const Home = () => {
  return (
    <div className="container home">
      <div>searchBar</div>
      <div className="restaurants-list">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Home;
