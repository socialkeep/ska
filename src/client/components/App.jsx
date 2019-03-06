import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationContainer from '../containers/NavigationContainer';
import MainContainer from '../containers/MainContainer';

const App = () => {

  return (
    <Router>
      <div>
        <NavigationContainer />
        <MainContainer />
      </div>
    </Router>
  )
}

export default App;