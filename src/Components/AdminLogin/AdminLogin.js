import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Alert, Button, Card, FormControl, InputGroup} from "react-bootstrap";
import Logo from "../../assets/keralalogo.png";
import LoginBg from "../../assets/loginbg.png";
import axios from "../../axios";
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

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


                                                    //if user name needed uncomment below and change code
                                                    // this.props.onLoggedIn(response.data.profile.employee_name);
                                                    // console.log("Already logged in");
                                                    // // name=response.data.
                                                    // setTimeout(() => {
                                                    //     this.props.history.push('/admin');
                                                    // }, 1200);

                                                    this.props.history.push('/admin');

                                                } else {
                                                    this.setState({passIncorrect: true})

                                                }
                                                console.log(response);
                                            }).catch(err => {
                                            console.log(err);
                                        })
                                    }}>{this.state.btnEnabled && 'Login'}{!this.state.btnEnabled && 'Please Wait...'}</Button>
                                    <div style={{marginTop: '20px', textAlign: 'right'}}>
                                        <Link to={'/'}>Employee Login</Link>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={9} style={{backgroundImage: `url(${LoginBg})`, padding: 0}}>
                            <Navbar bg="light" variant="light">
                                <Navbar.Brand href="#home">
                                    <img
                                        alt=""
                                        src={require('../../assets/icons/register.png')}
                                        width="30"
                                        height="30"
                                        style={{marginRight: '10px'}}
                                        className="d-inline-block align-top"
                                    />{' '}
                                    Admin Login
                                </Navbar.Brand>
                            </Navbar>
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



//Redux


const mapDispatchToProps = dispatch => {
    return {
        onLoggedIn: (name) => dispatch({type: 'LOGIN',name:name})
    };
};


export default connect(null, mapDispatchToProps)(AdminLogin);
