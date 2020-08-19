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
                        history.push('/');
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
            <Navbar.Brand href="#home">LSGD E-Governance</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href={'/LSGD_FRONT/mainpage'}>Home</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                    
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
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
