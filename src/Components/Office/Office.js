import React from 'react';
import styles from './Office.module.css';
import {Button, Card, Col, Container, Form, FormControl, InputGroup, Row} from 'react-bootstrap'
import axios from "../../axios";

class Office extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offices_list: []
        }
        this.newOfficeData = {
            office_name: null,
            office_district: 'Kannur',
            office_place: 'Thalassery',
            office_address: null,
        }

        this.createOffice = this.createOffice.bind(this)
        this.getOffice = this.getOffice.bind(this)
        this.getOffice()
    }

    getOffice() {
        axios.get('/designation/getoffices')
            .then(response => {
                console.log(response);
                if (response.data.status === 200) {
                    this.setState({offices_list: response.data.data})
                } else {
                    this.setState({offices_list: []})
                }
            }).catch(err => {
            console.log(err);
        })
    }

    createOffice(e) {
        console.log(this.newOfficeData)
        axios.post('/designation/createoffice', this.newOfficeData)
            .then(response => {
                console.log(response);
                if (response.data.status === 200) {
                    this.getOffice();
                } else {
                }
            }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className={styles.Office}>
                <Container fluid>
                    <Row>
                        <Col md={3}>
                            <Card style={{width: '90%', marginTop: '5%'}}>
                                <Card.Img variant="top" src={require('../../assets/cardbg1.png')}
                                          style={{ height: '20%', width: '100%'}}/>
                                <Card.Body>
                                    <Card.Title>Add New Office</Card.Title>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            onChange={(e) => {
                                                this.newOfficeData.office_name = e.target.value;
                                            }}
                                            placeholder="Office Name"
                                            aria-label="name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            onChange={(e) => {
                                                this.newOfficeData.office_address = e.target.value;
                                            }}
                                            placeholder="Office Address"
                                            aria-label="name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <Row>
                                        <Container>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Select District</Form.Label>
                                                <Form.Control as="select" onChange={(e) => {
                                                    this.newOfficeData.office_district = e.target.value;
                                                }}>
                                                    <option>Kannur</option>
                                                    <option>Trivandrum</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Form.Control>
                                            </Form.Group>

                                        </Container>
                                        <Container>
                                            <Form.Group controlId="exampleForm.ControlSelect2">
                                                <Form.Label>Select Place</Form.Label>
                                                <Form.Control as="select" onChange={(e) => {
                                                    this.newOfficeData.office_place = e.target.value;
                                                }}>
                                                    <option>Place1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Form.Control>
                                            </Form.Group>

                                        </Container>
                                    </Row>
                                    <Button variant="primary" onClick={this.createOffice}>Create Office</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={9}>
                            <Row style={{marginBottom: '10px', marginTop: '20px'}}>
                                <Container style={{fontSize: 'large'}}>ALL OFFICES...</Container>
                                <Container>Refresh</Container>
                            </Row>
                            <Row>
                                <Container>
                                    {this.state.offices_list.map((ele) => {

                                        return (
                                            <Card style={{width: '90%'}} key={ele._id}>
                                                {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                                                <Card.Body>
                                                    <Card.Title>
                                                        {ele.office_name}
                                                    </Card.Title>
                                                    <Card.Subtitle>
                                                        {ele.office_address}
                                                    </Card.Subtitle>
                                                    <Card.Text>
                                                        {ele.office_place + ', ' + ele.office_district}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Created On {new Date(ele.created_at).toDateString()}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Status: {(() => {
                                                        if (!ele.isDelisted) {
                                                            return 'Working'
                                                        } else {
                                                            return 'Not Working'
                                                        }
                                                    })()}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })}
                                </Container>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                </Container>
            </div>
        )
    }
}

Office.propTypes = {};

Office.defaultProps = {};

export default Office;
