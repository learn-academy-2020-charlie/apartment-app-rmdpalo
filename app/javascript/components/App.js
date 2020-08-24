import React from "react"
import PropTypes from "prop-types"

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default App
