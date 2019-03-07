import React , { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationContainer from '../containers/NavigationContainer.jsx';
import MainContainer from '../containers/MainContainer.jsx';
import * as styles from '../styles/App.scss'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Router>
        <div className="gridContainer">
              <NavigationContainer />
              <MainContainer />
              <footer>
                For more information about SocialKeep, visit SocialKeep.io.
              </footer>  
        </div>
      </Router>
    )
  }

}

export default App;