import React, { useState } from 'react';

import axios from '../axios';
import classes from './Login.css';
import Logo from '../assets/keralalogo.png'

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
            props.history.push('/mainpage');
        
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
    <div className={classes.Login}>
      <div className={classes.form}>
        <br/><br/>
      Login<br /><br />
      <img src={Logo} style={{width: '30%'}}/>
      <Error show={show}/>
          <br /><br />
      <div >
        Username<br />
        <input className={classes.input} type="text" {...username} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      {/* {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /> */}
      <input type="button" className={classes.button} value='Login' onClick={handleLogin} /><br />
    
      <br /><br /></div>

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
