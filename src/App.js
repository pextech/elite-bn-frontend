import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes/index';
import getUserInfo from './utils/getUserInfo';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
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
