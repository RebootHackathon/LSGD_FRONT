import React from 'react';
import styles from './Grants.module.css';
import axios from "../../axios";
import {Button, Card, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";

class Grants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grants_list: []
        }
        this.newgrantData = {
            grant_name: null,
            grant_amount: 0,
            grant_description: null,
            granting_body: null,
            grant_religion: 'ALL',
            grant_cast: 'ALL',
        }

        this.creategrant = this.creategrant.bind(this)
        this.getgrant = this.getgrant.bind(this)
        this.getgrant()
    }

    getgrant() {
        axios.get('/grants/getgrants')
            .then(response => {
                console.log(response);
                if (response.data.status === 200) {
                    this.setState({grants_list: response.data.data})
                } else {
                    this.setState({grants_list: []})
                }
            }).catch(err => {
            console.log(err);
        })
    }

    creategrant(e) {
        console.log(this.newgrantData)
        axios.post('/grants/addgrant', this.newgrantData)
            .then(response => {
                console.log(response);
                if (response.data.status === 200) {
                    this.getgrant();
                } else {
                }
            }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className={styles.Grants}>
                <Container fluid>
                    <Row>
                        <Col md={3}>
                            <Card style={{width: '90%', marginTop: '5%'}}>

                                <Card.Img variant="top" src={require('../../assets/cardbg1.png')}
                                          style={{ height: '20%', width: '100%'}}/>
                                <Card.Body>
                                    <Card.Title>Add New grant</Card.Title>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            onChange={(e) => {
                                                this.newgrantData.grant_name = e.target.value;
                                            }}
                                            placeholder="Grant Name"
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
                                                this.newgrantData.grant_amount = e.target.value;
                                            }}
                                            placeholder="Grant Amount"
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
                                                this.newgrantData.grant_description = e.target.value;
                                            }}
                                            placeholder="Grant Description"
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
                                                this.newgrantData.granting_body = e.target.value;
                                            }}
                                            placeholder="Granting Body"
                                            aria-label="name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <Row>
                                        <Container>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Select Religion</Form.Label>
                                                <Form.Control as="select" onChange={(e) => {
                                                    this.newgrantData.grant_religion = e.target.value;
                                                }}>
                                                    <option>ALL</option>
                                                    <option>Hindu</option>
                                                    <option>Christian</option>
                                                    <option>Muslim</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Container>
                                        <Container>
                                            <Form.Group controlId="exampleForm.ControlSelect2">
                                                <Form.Label>Select Place</Form.Label>
                                                <Form.Control as="select" onChange={(e) => {
                                                    this.newgrantData.grant_cast = e.target.value;
                                                }}>
                                                    <option>ALL</option>
                                                    <option>OBC</option>
                                                    <option>OEC</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Container>
                                    </Row>
                                    <Button variant="primary" onClick={this.creategrant}>Create grant</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={9}>
                            <Row style={{marginBottom: '10px', marginTop: '20px'}}>
                                <Container style={{fontSize: 'large'}}>ALL GRANTS...</Container>
                                <Container>Refresh</Container>
                            </Row>
                            <Row>
                                <Container>
                                    {this.state.grants_list.map((ele) => {

                                        return (
                                            <Card style={{width: '90%'}} key={ele._id}>
                                                {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                                                <Card.Body>
                                                    <Card.Title>
                                                        {ele.grant_name}
                                                    </Card.Title>
                                                    <Card.Subtitle>
                                                        {ele.grant_amount}
                                                    </Card.Subtitle>
                                                    <Card.Text>
                                                        {'Religion: ' + ele.grant_religion + ', Cast: ' + ele.grant_cast}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        Created On {new Date(ele.created_at).toDateString()}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {'Description: ' + ele.grant_description}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {'Sanctioned By: ' + ele.granting_body}
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


Grants.propTypes = {};

Grants.defaultProps = {};

export default Grants;
