import React from 'react';

import HeroContent from './components/header/HeroContent';

import Homepage from './pages/Homepage';

import './styles/partials/_app.scss';

function App() {
  return (
    <>
      <HeroContent />
      <Homepage />
    </>
  );
}

export default App;
