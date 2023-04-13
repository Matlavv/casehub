import React from 'react';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slider/Slider';
import "./Home.scss";

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="Meilleures ventes"/>
      <Categories/>
      <FeaturedProducts type="Nouveautés"/>
      <Contact/>
    </div>
  )
}

export default Home