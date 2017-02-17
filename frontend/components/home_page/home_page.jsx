import React from 'react';
import HomeSearchBarContainer from './home_search_bar';
import FeaturedAll from '../featured_spots/featured_all';

const Home = (props) => {
  return (
    <main className="home-all">

      <section>
        <h1 className="tbili-home-header">Tbili</h1>
        <h1 className="home-header"> Book places to stay around the world.</h1>
      </section>


      <section>
        <HomeSearchBarContainer/>
        <FeaturedAll />
      </section>
    </main>

  );
};

export default Home;
