import React from 'react';
// GLobal Style
import GlobalStyle from './components/GlobalStyle';
// import pages
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <AboutUs/>
    </div>
  );
}

export default App;
