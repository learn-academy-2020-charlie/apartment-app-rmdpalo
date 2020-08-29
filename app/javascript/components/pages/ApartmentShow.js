import React, { Component } from 'react'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

// Apartments have: a street designation, a city, state, a manager's name, manager's contact email, monthly rental price, bedrooms, bathrooms, and whether they allow pets

class ApartmentShow extends Component {
    render(){
        let { apartment } = this.props
        return(
            <React.Fragment>
                <h3>Apartment</h3>
                <Row>
                    <Col md="6">
                        <Card>
                            <CardTitle>
                                <h5>Street Address:</h5>
                                <p>
                                    { apartment.street }
                                    <br/>
                                    { apartment.city }, { apartment.state }
                                </p>
                                <p>Manager Name: { apartment.manager }</p>
                                <p>Manager Email: { apartment.email }</p>
                                <p>Monthly rent: { apartment.price }</p>
                                <p>Bedrooms: { apartment.bedrooms }</p>
                                <p>Bathrooms: { apartment.bathrooms }</p>
                                <p>Pets Allowed: { apartment.pets }</p>
                                <NavLink 
                                    to={"/index"}
                                >
                                    <Button color="secondary">
                                        Back to Index
                                    </Button>
                                </NavLink>
                            </CardTitle>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default ApartmentShow