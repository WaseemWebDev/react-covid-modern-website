import React from 'react';
import './App.css';
import NavbarHeader from './components/navbar';
import FeaturedImage from './components/featuredImage';
import Statistics from './components/statistics';
import Description from './components/description';
import Cards from './components/cards';

function App() {
  return (
    <div className="App">
      <NavbarHeader />
      <FeaturedImage />
      <Statistics />
      <Description />
      <Cards />

    </div>
  );
}

export default App;
