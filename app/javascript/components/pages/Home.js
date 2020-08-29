import React, { Component } from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <div style={{display:'flex', justifyContent:'center'}}>
                <h2>Welcome to the apartment finder app </h2>
                </div>
                <br></br>
                <div style={{display:'flex', justifyContent:'center'}}>
                <p>Find your new home wahoo.</p>
                </div>
            </React.Fragment>
        )
    }
}
export default Home