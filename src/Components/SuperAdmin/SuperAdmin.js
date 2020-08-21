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
import SideNavBar from "../SideNavBar/SideNavBar";
import ListGroup from "react-bootstrap/ListGroup";



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
        selected: 'office'
    }
    
    render() {
       
        return (
            
            <div className={styles.SuperAdmin}>
                <Container fluid style={{width: '100%', height: '100vh'}}>
                    <Row style={{height: '100%'}}>
                        <Col sm={2} style={{padding: 0, background: '#EEEEEE'}}>
                            <Navbar bg="dark" variant="dark">
                                <Navbar.Brand href="#home">
                                    <img
                                        alt=""
                                        src={require('../../assets/icons/parliament.png')}
                                        width="30"
                                        height="30"
                                        style={{marginRight: '8px'}}
                                        className="d-inline-block align-top"
                                    />{' '}
                                    LSGD E-GOV
                                </Navbar.Brand>
                            </Navbar>
                            <ListGroup style={{height: '90%'}}>
                                <ListGroup.Item action  variant="light" onClick={() => this.setState({selected: 'office'})}>
                                    Office</ListGroup.Item>
                                <ListGroup.Item action variant="light" onClick={() => this.setState({selected: 'posts'})}>
                                    Designation</ListGroup.Item>
                                <ListGroup.Item action variant="light" onClick={() => this.setState({selected: 'employee'})}>
                                    Employee</ListGroup.Item>
                                <ListGroup.Item action variant="light"  onClick={() => this.setState({selected: 'grant'})}>
                                    Grant</ListGroup.Item>
                            </ListGroup>
                            {/*<Nav className="mr-auto">*/}
                            {/*    <Nav.Link onClick={() => this.setState({selected: 'office'})}>Office</Nav.Link>*/}
                            {/*    <Nav.Link onClick={() => this.setState({selected: 'posts'})}>Post</Nav.Link>*/}
                            {/*    <Nav.Link*/}
                            {/*        onClick={() => this.setState({selected: 'employee'})}>Employee</Nav.Link>*/}
                            {/*    <Nav.Link onClick={() => this.setState({selected: 'grant'})}>Grant</Nav.Link>*/}
                            {/*    <NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                            {/*        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                            {/*        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                            {/*        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                            {/*        <NavDropdown.Divider/>*/}
                            {/*        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                            {/*    </NavDropdown>*/}
                            {/*</Nav>*/}

                        </Col>
                        <Col>
                            <Row>
                                <Col style={{padding: 0}}>
                                    <Navbar bg="light" variant={'light'} expand="lg">
                                        <Navbar.Brand href="#home">{String(this.state.selected).toLocaleUpperCase()}</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                                        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                                            <Nav.Link href={'/LSGD_FRONT/mainpage'}>Home</Nav.Link>
                                            <Nav.Link className="justify-content-end" onClick={()=>logout(this.props.history)}>
                                                <Typography variant="subtitle2" color="inherit"> {/*{this.props.name}*/}Logout <PowerSettingsNew color="inherit" /></Typography>
                                            </Nav.Link>
                                            <Form inline>
                                            </Form>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </Col>
                            </Row>
                            {this.state.selected === 'office' && <Row>
                                {
                                    <Office style={{paddingTop: '20px'}}/>
                                }
                            </Row>}
                            {this.state.selected === 'posts' && <Row>
                                {
                                    <Posts style={{paddingTop: '20px'}}/>
                                }
                            </Row>}
                            {this.state.selected === 'employee' && <Row>
                                {
                                    <Employee style={{paddingTop: '20px'}}/>
                                }
                            </Row>}
                            {this.state.selected === 'grant' && <Row>
                                {
                                    <Grants style={{paddingTop: '20px'}}/>
                                }
                            </Row>}
                        </Col>
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
