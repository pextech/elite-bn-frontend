import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes/index';

function App() {
  return (
    <Router>
      <div className="App bg-gray-100">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
