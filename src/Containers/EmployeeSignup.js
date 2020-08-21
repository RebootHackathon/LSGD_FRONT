import React from 'react';
import styles from './EmployeeSignup.css';
import axios from "../axios";
import {Button, Card, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts_list: [],
            office_list: [],
            employees_list: []
        }
        this.newemployeeData = {
            employee_name: null,
            employee_aadhar: null,
            employee_password: null,
            employee_post: null,
            employee_office: null,
        }

        this.createemployee = this.createemployee.bind(this)
       
        this.getposts = this.getposts.bind(this)
        this.getoffices = this.getoffices.bind(this)
       
        this.getoffices();
        this.getposts();
    }

    getposts() {
        axios.get('/designation/getposts')
            .then(response => {
                console.log('getpost', response);
                if (response.data.status === 200) {
                    this.setState({posts_list: response.data.data})
                    console.log(this.state.posts_list)
                    this.newemployeeData.employee_post = response.data.data[0]._id
                } else {
                    this.setState({posts_list: []})
                }
            }).catch(err => {
            console.log(err);
        })
    }

    getoffices() {
        axios.get('/designation/getoffices')
            .then(response => {
                console.log('get office', response);
                if (response.data.status === 200) {
                    this.setState({office_list: response.data.data})
                    this.newemployeeData.employee_office = response.data.data[0]._id
                    console.log(this.state.office_list)
                } else {
                    this.setState({office_list: []})
                }
            }).catch(err => {
            console.log(err);
        })
    }

  

    createemployee(e) {
        console.log(this.newemployeeData)
        axios.post('/employees/signupemployee', this.newemployeeData)
            .then(response => {
                console.log(response);
                if (response.data.status === 200) {
                   console.log("Successfully createted");
                   alert("Registration Successful...Wait for validation");
                   this.props.history.goBack()
                } else {
                }
            }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className={styles.Employee} >
                <Container fluid style={{height: '100%'}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Row style={{height: '100%'}}>
                        <Col md={9}>
                            
                            <Card style={{width: '90%', marginTop: '5%'}}>
                                <Card.Img variant="top" src={require('../assets/cardbg1.png')}
                                          style={{ height: '10%', width: '100%'}}/>
                                <Card.Body>
                                    <Card.Title style={{fontFamily: 'Mukta'}}>Register As Employee</Card.Title>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            onChange={(e) => {
                                                this.newemployeeData.employee_name = e.target.value;
                                            }}
                                            placeholder="employee Name"
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
                                                this.newemployeeData.employee_aadhar = parseInt(e.target.value);
                                            }}
                                            placeholder="employee Aadhar"
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
                                                this.newemployeeData.employee_password = e.target.value;
                                            }}
                                            placeholder="employee Password"
                                            aria-label="name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <Row>
                                        <Container >
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Select Office</Form.Label>
                                                <Form.Control as="select" onChange={(e) => {
                                                    this.newemployeeData.employee_office = e.target.value;
                                                }}>
                                                    {this.state.office_list.map((office) => {
                                                        return (
                                                            <option key={office._id}
                                                                    value={office._id}>{office.office_name}</option>
                                                        )
                                                    })}
                                                </Form.Control>
                                            </Form.Group>
                                        </Container>
                                        <Container>
                                            <Form.Group controlId="exampleForm.ControlSelect2">
                                                <Form.Label>Select Post</Form.Label>
                                                <Form.Control as="select" onChange={(e) => {
                                                    this.newemployeeData.employee_post = e.target.value;
                                                }}>
                                                    {this.state.posts_list.map((post) => {
                                                        return (
                                                            <option key={post._id}
                                                                    value={post._id}>{post.post_name}</option>
                                                        )
                                                    })}
                                                </Form.Control>
                                            </Form.Group>

                                        </Container>
                                    </Row>
                                    <Button variant="primary" onClick={this.createemployee}>Register employee</Button>
                                </Card.Body>
                            </Card>
                           
                        </Col>
                       
                    </Row>
                    <Row>
                    </Row> </div>
                </Container>
            </div>
        )
    }
}


Employee.propTypes = {};

Employee.defaultProps = {};

export default Employee;
