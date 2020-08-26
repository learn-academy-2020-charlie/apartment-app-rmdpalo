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
                                <CardTitle>placeholder title</CardTitle>
                                <CardText>placeholder text</CardText>
                                <Button>
                                    More info
                                </Button>
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