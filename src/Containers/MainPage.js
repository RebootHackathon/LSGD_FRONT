import React,{Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import AadharCard from '../assets/aadharcard.png'
import AppBar from "../Components/AppBar/AppBar";
class MainPage extends Component{
    render(){
        return(
            <div style={{width: '100%'}}>
                <Container fluid>
                    <Row>
                        <AppBar/>
                    </Row>
                    <Row style={{marginTop: '1%'}}>
                        
                            <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={AadharCard} />
                                <Card.Body>
                                    <Card.Title>Register New Citizen</Card.Title>
                                    <Card.Text>
                                        Register new citizen for availing services
                                    </Card.Text>
                                    <Link to="/LSGD_FRONT/registercitizen">
                                        <Button block variant="primary">Go</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                            </Col>
                            <Col >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={AadharCard} />
                                <Card.Body>
                                    <Card.Title>Get User Schemes</Card.Title>
                                    <Card.Text>
                                        Retrieve Schemes granted to a person by Aadhar
                                    </Card.Text>
                                    <Link to="/LSGD_FRONT/listgrants">
                                        <Button block variant="primary">Go</Button>
                                    </Link>
                                </Card.Body>
                                </Card>
                                </Col>
                      


                       

                    </Row>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default MainPage;
