import React from 'react';

import HeroContent from './components/header/HeroContent';

import Homepage from './pages/Homepage';

import Footer from './components/footer/Footer';

import './styles/partials/_app.scss';

function App() {
  return (
    <>
      <HeroContent />
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
