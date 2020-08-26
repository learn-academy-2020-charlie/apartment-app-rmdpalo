import React, { Component } from 'react';
import { Jumbotron, Container} from 'reactstrap'

class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <Container fluid>
                    <div style={{marginLeft:"50px"}}>
                        <h1 className="display-3">Apartment App </h1>
                        <p> Findyerapahtment wahoo</p>
                    </div>
                    </Container>
                </Jumbotron>
            </React.Fragment>
        )
    }
}
export default Header