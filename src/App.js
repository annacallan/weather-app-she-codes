import React from 'react';
import AppContainer from './components/containers/AppContainer';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className='appClass'>
      <AppContainer />
    </div>
  </Router>
  );
}

export default App;