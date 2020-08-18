import React, {useState} from 'react';
import lottie from 'lottie-web'
import axios from '../axios';
import classes from './Login.css';
import Logo from '../assets/keralalogo.png'
import Covid1 from '../assets/lottie/covid1.json'
import LoginBg from '../assets/loginbg.jpg'
import {Button, Card, FormControl, InputGroup} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import $ from 'jquery';
import Spinner from 'react-bootstrap/Spinner';
import {Link} from 'react-router-dom'

function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [play, setPlay] = useState(false);
    const [spinning, setSpinning] = useState(false);
    // handle button click of login form
    const handleLogin = () => {
        setSpinning(true);
        console.log(username, password);
        const authData = {"username": username.value, "password": password.value}
        axios.defaults.withCredentials = true;
        // props.history.push('/dashboard');
        axios.post('/auth/login', authData)
            .then(response => {
                console.log(authData);
                if (response.data.status === 200) {
                    setShow(false);

                    // let history = useHistory();
                    props.history.push('LSGD_FRONT/mainpage');

                } else {
                    setShow(true);


                }
                setSpinning(false);
                console.log(response);
            }).catch(err => {
            setSpinning(false);
            console.log(err);
        })
    }
    const Error = (props) => {

        if (props.show) {
            return <p className={classes.autherror}>Incorrect username or password !</p>
        } else {
            return null
        }
    }
    $(document).ready(function () {
        console.log('playing')
        if (!play) {
            setPlay(true);
            lottie.loadAnimation({
                container: document.getElementById('loginanimation'), // the dom element that will contain the animation
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: Covid1
            });

        }
    });
    let loginLabel = "Login";
    if (spinning) {
        loginLabel = <Spinner animation="border"/>;
    }
    return (
        <div style={{minHeight: '100vh', width: '100%'}}>
            <Container fluid>
                <Row>
                    <Col md={3} style={{padding: '0'}}>
                        <Card style={{width: '100%', height: '100vh'}}>
                            <Card.Img variant="top" src={Logo} style={{maxHeight: '50vh', padding: '7%'}}/>
                            <Card.Body>
                                <Error show={show}/>
                                <InputGroup style={{marginTop: '30%'}} className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        {...username}
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
                                        {...password}
                                    />
                                </InputGroup>

                                <Button variant="primary" block onClick={handleLogin}>{loginLabel}</Button>

                                <div style={{marginTop: '20px', textAlign: 'right'}}>
                                <Link to={'/adminlogin'}>Admin Login</Link>
                                    </div>
                                <Button onClick = {() => {
                                    // let url = 'http://localhost:8000/t'
                                    let url = 'https://reboothack12345.herokuapp.com/t'
                                    axios.get(url, {withCredentials: true})
                                        .then(response => {
                                            console.log('a', response.data);
                                        }).catch(err => {
                                        console.log(err);
                                    })
                                    // fetch(url, {
                                    //     method: "GET",
                                    //     headers: {
                                    //         'Accept': 'application/json',
                                    //         'Content-Type': 'application/json',
                                    //         'Cache': 'no-cache'
                                    //     },
                                    //     credentials: 'include'
                                    // })
                                    //     .then((res) => res.json())
                                    //     .then((json) => {
                                    //         console.log(json);
                                    //     })
                                    //     .catch((err) => {
                                    //         console.log(err);
                                    //     });
                                }}>Bs</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={9} style={{backgroundImage: `url(${LoginBg})`}}>
                        <div style={{paddingLeft: '35%'}}>
                            <div
                                style={{marginLeft: '14%', marginTop: '8%', fontSize: '20px', color: 'white'}}>Employee Login
                            </div>
                            <div id={"loginanimation"} style={{width: '40%', marginTop: '25%'}}>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;
