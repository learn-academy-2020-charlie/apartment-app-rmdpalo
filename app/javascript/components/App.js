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

  componentDidMount(){
    fetch("/apartments")
    .then(response => {
      // check for a successful response
      if(response.status === 200) {
        // convert response to json and return promise
        return response.json()
      }
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  createNewApartment = (apartment) => {
    console.log(apartment)
    return fetch("/apartments", {
      // converting an object to string
      body: JSON.stringify(apartment),
      // specify info being sent and info returning should be in JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb "POST" so the correct endpoint is invoked on server
    })
    .then(response => {
      // if the response is good - reload
      if(response.status === 200){
        this.componentDidMount()
      }
      return response
    })
    .catch(errors => {
      console.log("create errors:", errors);
    })
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
            {/* Route for homepage */}
            <Route exact path="/" component={ Home } />
            {/* Route for index page, currently uses mock data from mockApartments.js */}
            <Route 
              path="/index"
              render={ (props) => <ApartmentIndex apartments={ mockApartments } />}
            />
            {/* Route for show page */}
            <Route 
              path={"/show/:id"}
              render={ (props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
                return (
                  <ApartmentShow apartment={ apartment } />
                )
              }}
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
