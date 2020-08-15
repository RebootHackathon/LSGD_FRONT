import React, { useState } from 'react';

import axios from '../axios';
import classes from './Login.css';
import Logo from '../assets/keralalogo.png'
import LoginIcon from '../assets/loginicon.png'
import {Button, Card, FormControl, InputGroup} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [show,setShow]=useState(false);
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
            props.history.replace('LSGD_FRONT/mainpage');
        
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
                <Col md={9} style={{background: '#e0ece4'}}></Col>
            </Row>
        </Container>
    </div>
    // <div className={classes.Login}>
    //   <div className={classes.form}>
    //     <br/>
    //   <img src={Logo} style={{width: '34%', marginTop: '10px',  marginBottom: '10px'}}/>
    //   <Error show={show}/>
    //       <br /><br />
    //   <div >
    //     Username<br />
    //     <input className={classes.input} type="text" {...username} autoComplete="new-password" />
    //   </div>
    //   <div style={{ marginTop: 10 }}>
    //     Password<br />
    //     <input type="password" {...password} autoComplete="new-password" />
    //   </div>
    //   {/* {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /> */}
    //       <Button style={{marginTop: '15%'}} variant="primary" size="lg" block onClick={handleLogin}>
    //           Login
    //       </Button>
    //   {/*<input style={{marginTop: '8%', marginBottom: '10%'}} type="button" className={classes.button} value='Login' onClick={handleLogin} /><br />*/}
    //   </div>
    // </div>
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
