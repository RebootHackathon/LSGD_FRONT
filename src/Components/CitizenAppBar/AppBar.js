import React ,{useEffect}from 'react';
import styles from './AppBar.module.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Form} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import axios from '../../axios';
import { PowerSettingsNew } from "@material-ui/icons";
import {Typography} from '@material-ui/core';
import { connect } from 'react-redux';



const logout=(history,props)=>{
    
    axios.get('/auth/logout')
                .then(response => {
                    console.log(response);
                    if (response.data.status === 200) {
                        console.log("Logged out");
                        props.onLoggedOut();
                        history.push('/citizenlogin');
                    } else {
                        console.log("Logout failed");


                    }
                })
                .catch(err=>{
                    console.log(err);
                });

}

const AppBar = (props) => {
    const history=useHistory()
    useEffect(() => {
        axios.get('/auth/isloggedin')
                .then(response => {
                    console.log(response);
                    if (response.data.status === 200) {
                        props.onLoggedIn(response.data.profile.employee_name);
                        console.log("Already logged in");
                        // name=response.data.
                        
                        // props.history.push('LSGD_FRONT/mainpage');
                    } else {
                        
                        console.log("Not Logged in");


                    }
                })
                .catch(err=>{
                    console.log(err);
                });


        
      });
    return(
        <div className={styles.AppBar}>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">LSGD - Citizen Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><span onClick={() => {
                        history.push({pathname: '/citizenmainpage'})
                    }}>Home/My Grants</span></Nav.Link>
                    <Nav.Link><span onClick={()=>{
                        console.log('app')
                        let state = {
                            aadhar: '',
                            length: null,
                            data: [],
                            expanded: [],
                            userExist: true,
                            spinning: false,
                            grants: [],
                        };
                        history.push({pathname: '/citizenapplygrant', state})
                    }}>Apply New Grant</span></Nav.Link>
                    <Nav.Link><span onClick={()=>{
                        console.log('app')
                        let state = {
                            aadhar: '',
                            length: null,
                            data: [],
                            expanded: [],
                            userExist: true,
                            spinning: false,
                            grants: [],
                        };
                        history.push({pathname: '/citizenviewallgrants', state})
                    }}>View All Grant</span></Nav.Link>
                    </Nav>
                   
                       <Nav.Link className="justify-content-end" onClick={()=>logout(history,props)}>
                           <Typography variant="subtitle2" color="inherit"> {props.name} <PowerSettingsNew color="inherit" /></Typography>
                        </Nav.Link>
 
               
                <Form inline>

                </Form>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )
}
   


AppBar.propTypes = {};

AppBar.defaultProps = {};


const mapStateToProps = state => {
    return {
        name: state.name,
        isLoggedIn:state.isLoggedIn
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onLoggedOut: () => dispatch({type: 'LOGOUT'}),
        onLoggedIn: (name) => dispatch({type: 'LOGIN',name:name})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
