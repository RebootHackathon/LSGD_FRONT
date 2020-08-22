import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";

import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import axios from "../../../axios";
import {InputGroup} from "react-bootstrap";

const RegisterNewCitizenForm = (props) => {
    return <div style={{width: '100%'}}>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Card style={{width: '30%', alignItems: 'center', marginTop: '1%'}}>
                <Card.Img variant="top" src={require('../../../assets/register.png')}
                          style={{paddingTop: '1%', width: '15%'}}/>
                {/* <Card.Img variant="top" src={require('../assets/aadharlogo.png')} /> */}
                <Card.Body>
                    <Card.Title style={{display: 'flex', justifyContent: 'center', paddingBottom: '20px'}}><strong>{props.state.enterDetailsLabel}</strong></Card.Title>
                    <Form>
                        <Container>
                            <Row>
                                <Col>
                                    <Form.Control type="text" placeholder={props.state.aadharLabel} id="aadhar"
                                                  onChange={props.onInputChange}/>
                                </Col>
                                <Col>
                                    <Button block>{props.state.getOtpLabel}</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Control type="text" placeholder={props.state.enterOtpLabel}
                                                  />
                                </Col>
                                <Col>
                                    <Button block onClick={() => {
                                        console.log('emp', props.state.aadhar)
                                        axios.post('/aadhar/citizen', {adhaar: props.state.aadhar})
                                            .then((response) => {
                                                console.log('emp', response, props.state, props.setstate)
                                                if (response.data.status === 200){
                                                    props.setstate({name: response.data.data.name,
                                                        fathername:response.data.data.father_name,
                                                        mothername:response.data.data.mother_name,
                                                        verified: true})
                                                }else {
                                                    props.setstate({name: '', verified: false, verifiedText: 'Failed To Verify'})
                                                }
                                            })
                                    }}>{props.state.goLabel}</Button>
                                </Col>
                            </Row>
                        </Container>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>{props.state.aadharLabel}</Form.Label>
                                <Form.Control type="text" placeholder={props.state.aadharLabel} id="aadhar"
                                              onChange={props.onInputChange} value={props.state.aadhar}/>

                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>{props.state.nameLabel}</Form.Label>
                                <Form.Control type="text" placeholder={props.state.nameLabel} id="name"
                                              value={props.state.name}
                                              onChange={props.onInputChange}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>{props.state.addressLabel}</Form.Label>
                                <Form.Control placeholder={props.state.addressLabel} id="address" onChange={props.onInputChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>{props.state.dobLabel}</Form.Label>
                                <Form.Control type="date" placeholder={props.state.dobLabel} id="dob" onChange={props.onInputChange}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>{props.state.incomeLabel}</Form.Label>
                                <Form.Control placeholder={props.state.incomeLabel} id="income" onChange={props.onInputChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>{props.state.castLabel}</Form.Label>
                                <Form.Control placeholder={props.state.castLabel} id="cast" onChange={props.onInputChange}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>{props.state.jobLabel} </Form.Label>
                                <Form.Control placeholder={props.state.jobLabel}  id="job" onChange={props.onInputChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>{props.state.religionLabel} </Form.Label>
                                <Form.Control placeholder={props.state.religionLabel}  id="religion" onChange={props.onInputChange}/>
                            </Form.Group>

                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridAddress1">
                                <Form.Label>{props.state.motherLabel}</Form.Label>
                                <Form.Control placeholder={props.state.motherLabel} id="mother_name"
                                              value={props.state.mothername}
                                              onChange={props.onInputChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>{props.state.fatherLabel}</Form.Label>
                                <Form.Control placeholder={props.state.fatherLabel} id="father_name"
                                              value={props.state.fathername}
                                              onChange={props.onInputChange}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>

                            <Form.Group as={Col} controlId="formGridAddress2">
                                <Form.Label>{props.state.passwordLabel}</Form.Label>
                                <Form.Control placeholder={props.state.passwordLabel} id="password"
                                              onChange={props.onInputChange}/>
                            </Form.Group>
                        </Form.Row>

                        {/*<Button variant="primary" block type="submit" onClick={props.onClickHandler}>*/}
                        {/*    {props.registerLabel}*/}
                        {/*</Button>*/}
                        {props.state.verified && <Button variant="primary" block type="submit" onClick={props.onClickHandler}>
                            {props.registerLabel}
                        </Button>}
                        {!props.state.verified && <Button block disabled={!props.state.verified} variant="primary">{props.state.getOtpfirstLabel}</Button>}
                    </Form>
                </Card.Body>
            </Card>
        </div>
    </div>

}

export default RegisterNewCitizenForm;
