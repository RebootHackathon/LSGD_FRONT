import React from 'react';
import PropTypes from 'prop-types';
import styles from './AdminLogin.module.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Alert, Button, Card, FormControl, InputGroup} from "react-bootstrap";
import Logo from "../../assets/keralalogo.png";
import LoginBg from "../../assets/loginbg.jpg";
import axios from "../../axios";
import {useHistory} from "react-router";

class AdminLogin extends React.Component{
    state = {
        authData: {
            username: '',
            password: '',
        },
        btnEnabled: true,
        passIncorrect: false,
    }
    render() {
        return (
            <div style={{minHeight: '100vh', width: '100%'}}>
                <Container fluid>
                    <Row>
                        <Col md={3} style={{padding: '0'}}>
                            <Card style={{width: '100%', height: '100vh'}}>
                                <Card.Img variant="top" src={Logo} style={{maxHeight: '50vh', padding: '7%'}}/>
                                <Card.Body>
                                    <InputGroup style={{marginTop: '30%'}} className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            onChange={(e) => {
                                                this.state.authData.username = e.target.value;
                                            }}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            type="password"
                                            placeholder="Password"
                                            aria-label="Password"
                                            aria-describedby="basic-addon1"
                                            onChange={(e) => {
                                                this.state.authData.password = e.target.value;
                                            }}
                                        />
                                    </InputGroup>

                                    <Button variant="primary" disabled={!this.state.btnEnabled} block onClick={(e) => {
                                        this.setState({btnEnabled: false})
                                        axios.post('/auth/adminlogin', this.state.authData)
                                            .then(response => {
                                                this.setState({btnEnabled: true})
                                                console.log(response)
                                                if (response.data.status === 200) {
                                                    this.setState({passIncorrect: false})
                                                    // let history = useHistory();
                                                    this.props.history.push('/admin');

                                                } else {
                                                    this.setState({passIncorrect: true})

                                                }
                                                console.log(response);
                                            }).catch(err => {
                                            console.log(err);
                                        })
                                    }}>{this.state.btnEnabled && 'Login'}{!this.state.btnEnabled && 'Please Wait...'}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={9} style={{backgroundImage: `url(${LoginBg})`}}>
                            <div style={{paddingLeft: '35%'}}>
                                <div
                                    style={{marginLeft: '14%', marginTop: '8%', fontSize: '20px', color: 'white'}}>Admin Login
                                </div>
                                <div id={"loginanimation"} style={{width: '40%', marginTop: '25%'}}>
                                </div>
                            </div>
                            {
                                this.state.passIncorrect &&
                                <Alert variant={'primary'}>
                                    Incorrect Password
                                </Alert>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

AdminLogin.propTypes = {};

AdminLogin.defaultProps = {};

export default AdminLogin;
