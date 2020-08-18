import React from 'react';
import {Col, Container, Form, Row} from 'react-bootstrap'
import styles from './SuperAdmin.module.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Office from "../Office/Office";
import Posts from "../Posts/Posts";
import Employee from "../Employee/Employee";
import Grants from "../Grants/Grants";
import axios from '../../axios';


import { PowerSettingsNew } from "@material-ui/icons";
import {Typography} from '@material-ui/core';
import { connect } from 'react-redux';



const logout=(history)=>{

    axios.get('/auth/logout')
                .then(response => {
                    console.log(response);
                    if (response.data.status === 200) {
                        console.log("Logged out");
                        // this.props.onLoggedOut();
                       history.push('/adminlogin');
                    } else {
                        console.log("Logout failed");


                    }
                })
                .catch(err=>{
                    console.log(err);
                });

}


class SuperAdmin extends React.Component {
    state = {
        selected: 'employee'
    }
    
    render() {
       
        return (
            
            <div className={styles.SuperAdmin}>
                <Container fluid style={{width: '100%'}}>
                {console.log("[superadmin]",this.props)}
                    <Row>
                        <Col style={{padding: 0}}>
                            <Navbar bg="light" expand="lg">
                                <Navbar.Brand href="#home">LSGD E-Governance</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <Nav.Link href={'/LSGD_FRONT/mainpage'}>Home</Nav.Link>
                                        <Nav.Link onClick={() => this.setState({selected: 'office'})}>Office</Nav.Link>
                                        <Nav.Link onClick={() => this.setState({selected: 'posts'})}>Post</Nav.Link>
                                        <Nav.Link
                                            onClick={() => this.setState({selected: 'employee'})}>Employee</Nav.Link>
                                        <Nav.Link onClick={() => this.setState({selected: 'grant'})}>Grant</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider/>
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                        </Nav>
                                        <Nav.Link className="justify-content-end" onClick={()=>logout(this.props.history)}>
                           <Typography variant="subtitle2" color="inherit"> {/*{this.props.name}*/}Logout <PowerSettingsNew color="inherit" /></Typography>
                        </Nav.Link>

                                   
                                    <Form inline>

                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '20px'}}>
                        {
                            this.state.selected === 'office' && <Office></Office>
                        }
                    </Row>
                    <Row style={{marginTop: '20px'}}>
                        {
                            this.state.selected === 'posts' && <Posts></Posts>
                        }
                    </Row>
                    <Row style={{marginTop: '20px'}}>
                        {
                            this.state.selected === 'employee' && <Employee></Employee>
                        }
                    </Row>
                    <Row style={{marginTop: '20px'}}>
                        {
                            this.state.selected === 'grant' && <Grants></Grants>
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}

SuperAdmin.propTypes = {};

SuperAdmin.defaultProps = {};




const mapStateToProps = state => {
    return {
        name: state.name,
        isLoggedIn:state.isLoggedIn
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onLoggedOut: () => dispatch({type: 'LOGOUT'})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SuperAdmin);
