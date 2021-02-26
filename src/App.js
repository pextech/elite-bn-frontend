import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Routes from './Routes/index';
import getUserInfo from './utils/getUserInfo';

function App() {
  const dispatch = useDispatch();
  getUserInfo(dispatch);
  return (
    <Router>
      <div className="App bg-gray-100">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
