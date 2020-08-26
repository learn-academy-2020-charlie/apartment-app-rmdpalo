import React from "react"
import PropTypes from "prop-types"
import Home from './pages/Home.js'
import ApartmentIndex from './pages/ApartmentIndex.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import mockApartments from './mockApartments.js'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route 
              path="/apartmentindex"
              render={ (props) => <ApartmentIndex apartments={ mockApartments } />}
            />
        <h1>Apartment App</h1>
        { logged_in && 
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        { !logged_in && 
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
        </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App
