import React , { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationContainer from '../containers/NavigationContainer.jsx';
import MainContainer from '../containers/MainContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
        <div>
          <NavigationContainer />
          <MainContainer />
        </div>
    )
  }

}

export default App;