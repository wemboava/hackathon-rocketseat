import React from 'react';
import './App.css';
import IndexRouter from './route';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        {/* <header className="App-header" /> */}
        <IndexRouter />
      </div>
    </>
  );
}

export default App;
