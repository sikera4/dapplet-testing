import React from 'react';
import './App.scss';
import LeftAside from './Components/LeftAside/LeftAside';
import Main from './Components/Main/Main';
import RightAside from './Components/RightAside/RightAside';

function App() {
  return (
    <div className="App">
      <LeftAside />
      <Main />
      <RightAside />
    </div>
  );
}

export default App;
