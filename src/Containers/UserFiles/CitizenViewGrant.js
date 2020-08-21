import React from 'react';
import styles from './CitizenViewGrant.css';
import axios from "../../axios";
import {Button, Card, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import AppBar from '../../Components/AppBar/AppBar';

class Grants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grants_list: [],
            allgrantsLabel:'എല്ലാ ഗ്രാന്റും',
            religionLabel:'മതം',
            castLabel:'ജാതി',
            descriptionLabel:'വിവരണം',
            createdLable:'ഉണ്ടാക്കിയത്',
            sanctionLabel:'അനുവദിച്ചത്',
            statusLabel:'അവസ്ഥ',
            grantNameLabel:'ഗ്രാന്റിന്റെ പേര്',
            amountLabel:'രൂപ'

        }
        this.newgrantData = {
            grant_name: null,
            grant_amount: 0,
            grant_description: null,
            granting_body: null,
            grant_religion: 'ALL',
            grant_cast: 'ALL',
        }

        // this.creategrant = this.creategrant.bind(this)
        this.getgrant = this.getgrant.bind(this)
        this.getgrant()
    }

    getgrant() {
        axios.get('/grants/getgrants')
            .then(response => {
                console.log(response);
                if (response.data.status === 200) {
                    this.setState({grants_list: response.data.data})
                } else {
                    this.setState({grants_list: []})
                }
            }).catch(err => {
            console.log(err);
        })
    }

    // creategrant(e) {
    //     console.log(this.newgrantData)
    //     axios.post('/grants/addgrant', this.newgrantData)
    //         .then(response => {
    //             console.log(response);
    //             if (response.data.status === 200) {

    //             } else {
    //             }
    //         }).catch(err => {
    //         console.log(err);
    //     })
    // }

    render() {
        return (
            <div className={styles.Grants}>
                <Container fluid>
                <Row>
                        <AppBar/>
                    </Row>
                    
                    <Row>
                    <div className={styles.Center}>
                        <Col md={9}>
                            <Row style={{marginBottom: '10px', marginTop: '20px'}}>
                                <Container style={{fontSize: 'large'}}>{this.state.allgrantsLabel}</Container>
                                <Container>Refresh</Container>
                            </Row>
                            <Row>
                                <Container>
                                    {this.state.grants_list.map((ele) => {

                                        return (
                                            <Card style={{width: '90%'}} key={ele._id}>
                                                {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                                                <Card.Body>
                                                    <Card.Title>
                                                     {this.state.grantNameLabel +' : '+ele.grant_name}
                                                    </Card.Title>
                                                    <Card.Subtitle>
                                                     {this.state.amountLabel+' : '+ele.grant_amount}
                                                    </Card.Subtitle>
                                                    <Card.Text>
                                                        {this.state.religionLabel +' : '+ ele.grant_religion + this.state.castLabel +' : '+ele.grant_cast}
                                                    </Card.Text>
                                                    <Card.Text>
                                                       {this.state.createdLable +' : ' +new Date(ele.created_at).toDateString()}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {this.state.descriptionLabel +' : '+ ele.grant_description}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {this.state.sanctionLabel+' : '+ ele.granting_body}
                                                    </Card.Text>
                                                    <Card.Text>
                                                        {this.state.statusLabel} {(() => {
                                                        if (!ele.isDelisted) {
                                                            return ': Working'
                                                        } else {
                                                            return ': Not Working'
                                                        }
                                                    })()}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })}

                                </Container>
                            </Row>
                        </Col>
                        </div>
                    </Row>
                    
                    <Row>
                    </Row>
                </Container>
            </div>
        )
    }
}


Grants.propTypes = {};

Grants.defaultProps = {};

export default Grants;
