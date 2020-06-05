import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import LeafletMap from "./LeafletMap.js";
import Search from "./Search.js";
import Eroute from './Eroute';

const Home = props => {
  return (
    <div className="home">
      <Header />
      <Eroute/>
      <Search setUserCoords={props.setUserCoords} />
      <LeafletMap userCoords={props.userCoords} />
      <section>
        <p>
          With Epicentral you will be able to get the latest updates on
          earthquakes happening around the world in real time; as well as be
          able to get up to date information on how to be prepared, and what to
          do in the event of an earthquake.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
