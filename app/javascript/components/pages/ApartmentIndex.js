import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class ApartmentIndex extends Component{
    render(){
        return(
            <React.Fragment>
                    <h2>All the apartments</h2>
                    <Row>
                        {/* 6 iterates through each element in our database and makes a column/card for each one */}
                        {this.props.apartments.map((apartment, index) => {
                            return(
                        <Col sm="4" key={ index }>
                            <Card>
                                <CardTitle>
                                    <h5>{ apartment.street }</h5>
                                <CardSubtitle>
                                    <h5>{ apartment.city }, { apartment.state }</h5>
                                </CardSubtitle>
                                {/* Link should lead to a show page */}
                                <NavLink to={`/show/${apartment.id}`}>
                                    <Button>
                                        More info
                                    </Button>
                                </NavLink>
                                </CardTitle>
                            </Card>
                        </Col>
                            )
                        })}
                    </Row>
            </React.Fragment>
        )
    }
}
export default ApartmentIndex