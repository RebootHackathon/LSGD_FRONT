import React, {useEffect, useState} from 'react';
import lottie from 'lottie-web'
import axios from '../axios';
import classes from './Login.css';
import Logo from '../assets/keralalogo.png'
import Covid1 from '../assets/lottie/covid1.json'
import LoginIcon from '../assets/loginicon.png'
import {Button, Card, FormControl, InputGroup} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import $ from 'jquery';

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [show,setShow]=useState(false);
  const [play,setPlay]=useState(false);
  // handle button click of login form
  const handleLogin = () => {
      console.log(username,password);
      const authData={ "username":username.value,"password":password.value}
      axios.defaults.withCredentials = true;
      // props.history.push('/dashboard');
      axios.post('/auth/login',authData)
        .then(response=>{
          console.log(authData);
          if(response.data.status===200){
            setShow(false);
            props.history.push('LSGD_FRONT/mainpage');

          }
          else{
            setShow(true);

          }
        console.log(response);
      }).catch(err=>{
        console.log(err);
      })
  }
  const Error=(props)=>{

      if(props.show){
        return <p className={classes.autherror}>Incorrect username or password !</p>
      }
      else{
        return null
      }
  }
    $(document).ready(function () {
        console.log('playing')
        if(!play){
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
  return (
    <div style={{minHeight: '100vh', width: '100%'}}>
        <Container fluid>
            <Row>
                <Col md={3} style={{padding: '0'}}>
                    <Card style={{ width: '100%', height: '100vh' }}>
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
                        <Button variant="primary" block onClick={handleLogin}>Login</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={9} style={{background: '#e0ece4'}}>
                    <div style={{paddingLeft: '35%'}}>
                        <div style={{marginLeft: '14%', marginTop: '8%', fontSize: '20px'}}>Welcome</div>
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
