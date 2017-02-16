import React from 'react';
import HomeSearchBarContainer from './home_search_bar';
import FeaturedAll from '../featured_spots/featured_all';

const Home = (props) => {
  return (
    <main className="home-all">

      <section>
        <h1>Tbili</h1>
        <h1> Book places to stay around the world.</h1>
      </section>


      <section>
        <HomeSearchBarContainer/>
        <FeaturedAll />
      </section>
    </main>

  );
};

export default Home;
