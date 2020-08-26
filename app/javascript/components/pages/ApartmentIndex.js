import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class CatIndex extends Component{
    render(){
        return(
            <>
            <Header/>
                <div>
                    <h2>All the apartments</h2>
                    <Row>
                        {this.props.apartments.map((apartment, index) => {
                            return(
                        <Col sm="4" key={ index }>
                            <Card>
                                <CardTitle>
                                    <h5>{ apartment.street }</h5>
                                    <h5>{ apartment.city }</h5>
                                    <h5>{ apartment.state }</h5>
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
                </div>
            <Footer/>
            </>
        )
    }
}
export default CatIndex