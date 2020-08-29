import React from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import ApartmentIndex from './pages/ApartmentIndex.js'
import ApartmentShow from './pages/ApartmentShow.js'
import ApartmentNew from './pages/ApartmentNew.js'
import MyApartments from './pages/MyApartments.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // 4 INFORMATION SET TO STATE
      apartments: []
    }
  }

  // 3 INFORMATION GETS RETRIEVED HERE, WE FETCH THE INFO IN JSON FORMAT AND SET IT TO STATE
  componentDidMount(){
    fetch("/apartments")
    .then(response => {
      // check for a successful response
      if(response.status === 200) {
        // convert response to json and return promise
        return response.json()
      }
    })
    .then(apartmentArray => {
      // sets state with the data from backend into our empty array
      this.setState({ apartments: apartmentArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  // METHOD TO CREATE A NEW APARTMENT
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
      method: "POST"
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

  // METHOD TO DELETE AN APARTMENT

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user
    } = this.props
    console.log("logged_in", logged_in);
    return (
        <Router>
          <Header
            logged_in={ this.props.logged_in }
            sign_in_route={ this.props.sign_in_route }
            sign_out_route={ this.props.sign_out_route }
          />
          <Switch>
            {/* Route for homepage */}
            <Route exact path="/" 
            render={ (props) => 
              <Home
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
              />
            }
            />
            {/* Route for index page, uses our data from state */}
            <Route  
              path="/index"
              render={ (props) => 
                <ApartmentIndex 
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
                // 5 state data gets passed into our index through apartments
                apartments={ this.state.apartments }
                />
              }
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
              {/* Route for creating new apartments */}
            <Route
              path="/new"
              render={ (props) =>
                <ApartmentNew
                  createNewApartment={ this.createNewApartment }
                  current_user={ current_user }
                />
              }
            />
            {/* Will show apartments assigned to your user id, must be logged in for this route to work */}
            { logged_in &&
              <Route
              path="/myapartments"
              render={ (props) => {
                let user = current_user.id
                let apartments = this.state.apartments.filter(apartment => apartment.user_id === user)
                console.log(user, apartments)
                return (
                  <MyApartments apartments={ apartments } />
                )
              }}
              />
            }              
        </Switch>
        <Footer
          logged_in={ this.props.logged_in }
          sign_in_route={ this.props.sign_in_route }
          sign_up_route={ this.props.sign_up_route }
          sign_out_route={ this.props.sign_out_route }
        />
        </Router>
    );
  }
}

export default App
