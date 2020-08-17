import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

const RegisterNewCitizenForm = (props) => {
    return <div style={{width: '100%'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card style={{width: '70%', alignItems: 'center', marginTop: '4%'}}>
                <Card.Img variant="top" src={require('../assets/register.png')}
                          style={{paddingTop: '5%', height: '20%', width: '15%'}}/>
                {/* <Card.Img variant="top" src={require('../assets/aadharlogo.png')} /> */}
                <Card.Body>
                    <Card.Title style={{display: 'flex', justifyContent: 'center', paddingBottom: '20px'}}><strong>Enter
                        Details</strong></Card.Title>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Aadhar Number</Form.Label>
                                <Form.Control type="text" placeholder="Aadhar Number" id="aadhar"
                                              onChange={props.onInputChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" id="name" onChange={props.onInputChange}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Address" id="address" onChange={props.onInputChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date" placeholder="Dob" id="dob" onChange={props.onInputChange}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Income</Form.Label>
                                <Form.Control placeholder="Income" id="income" onChange={props.onInputChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Cast</Form.Label>
                                <Form.Control placeholder="Cast" id="cast" onChange={props.onInputChange}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Job</Form.Label>
                                <Form.Control placeholder="Job" id="job" onChange={props.onInputChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Religion</Form.Label>
                                <Form.Control placeholder="Religion" id="religion" onChange={props.onInputChange}/>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>Mother Name</Form.Label>
                                <Form.Control placeholder="Mother Name" id="mother_name"
                                              onChange={props.onInputChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>Father Name</Form.Label>
                                <Form.Control placeholder="Father Name" id="father_name"
                                              onChange={props.onInputChange}/>
                            </Form.Group>
                        </Form.Row>


                        <Button variant="primary" block type="submit" onClick={props.onClickHandler}>
                            {props.registerLabel}
                        </Button>

                    </Form>
                </Card.Body>
            </Card>
        </div>
    </div>

}

export default RegisterNewCitizenForm;
