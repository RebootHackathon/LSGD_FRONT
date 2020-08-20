import React, {Component} from 'react';

import SearchForm from '../Components/SearchForm/SearchForm';
import axios from '../axios';

import {Link} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import AppBar from "../Components/AppBar/AppBar";
import Spinner from 'react-bootstrap/Spinner';

class ListGrant extends Component {
    state = {
        aadhar: '',
        length: null,
        data: [],
        expanded: [],
        userExist: true,
        spinning: false,
        grants: []
    };

    // onCardClickHandler=(id)=>{
    //     const expand_element=this.state.data.filter(ele=>(
    //         ele._id===id
    //     ))
    //     this.props.location.state=this.state;
    //     console.log(this.props,"qwerty");
    //     this.props.history.push(  {pathname:'/LSGD_FRONT/'+id, state: { detail: expand_element,setstate:this.state }});
    // }

    onChangeHandler = (event) => {
        this.setState({aadhar: event.target.value})
    }
    onClickHandler = (event) => {
        this.setState({spinning: true});
        const body = {"citizenId": +this.state.aadhar}
        axios.post('/grants/getGrantsOfSpecificCitizen', body)
            .then(response => {
                console.log('specific', response);
                this.setState({spinning: false});
                if (response.data.data.length > 0) {
                    this.setState({expanded: new Array(response.data.data.length).fill(false)})
                    this.setState({data: response.data.data, length: response.data.data.length});
                } else {
                    this.setState({
                            length: 0,
                            data: []
                        }
                    )
                }
            })
            .catch(err => {
                this.setState({spinning: false});
                console.log(err);
            })
        const body1 = {"aadhar": +this.state.aadhar}
        axios.post('/users/getcitizeninfo', body1)
            .then(response => {
                this.setState({spinning: false});
                console.log('[status]', response);
                if (response.data.status === 200) {
                    this.setState({userExist: true})
                    console.log(response);

                }
                if (response.data.status === 201) {
                    this.setState({userExist: false});
                    console.log('[user check]', this.state.userExist);
                }
            })
            .catch(err => {
                this.setState({spinning: false});
                console.log(err);
            })

        axios.get('/grants/getgrants')
            .then(response => {
                console.log('[GRANTS]', response);
                if (response.data.status === 200) {
                    const len = response.data.data.length;
                    const grantArray = [];
                    for (let index = 0; index < len; index++) {
                        const id = response.data.data[index]._id;
                        const grantName = response.data.data[index].grant_name;
                        grantArray.push({"id": id, "grantName": grantName});


                    }
                    this.setState({grants: [...grantArray]})
                    console.log(this.state);
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    onClickApplyHandler(props) {
        props.history.push({pathname: '/LSGD_FRONT/applygrant', state: this.state})
    }

    render() {
        let searchLabel = "Search";
        if (this.state.spinning) {
            searchLabel = <Spinner animation="border"/>;
        }
        return (
            <div style={{width: '100%'}}>
                <Container fluid>
                    <Row>
                        <AppBar/>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <SearchForm searchLabel={searchLabel} onInputChange={this.onChangeHandler}
                                        value={this.state.aadhar} clicked={this.onClickHandler}/>
                        </Col>
                        <Col md={9}>
                            {this.state.length > 0 && <div>
                                <Row><Col style={{marginTop: '2%', marginBottom: '1%'}}>Result</Col></Row>
                                <Row>
                                    <Container style={{color: 'orange'}}>Pending Grants</Container>
                                    <Container fluid>{this.state.data.map((ele) => {
                                        let grant_details = this.state.grants.filter(grant => {
                                            return grant.id === ele.grantId
                                        });
                                        console.log("[filter]", grant_details, this.state.grants, ele.grantId, ele.applicationId);
                                        if (ele.status === 'Pending'){
                                            return (
                                                <Container key={ele._id}>
                                                    <Row style={{marginBottom: '2%'}}>
                                                        <Col sm={11}>
                                                            <Card key={ele._id}>
                                                                <Card.Body>
                                                                    <Card.Title>
                                                                        <Row>
                                                                            <Col> <Card.Text>Grant
                                                                                Name: {grant_details[0].grantName} </Card.Text></Col>
                                                                            <Col>
                                                                                <Card.Text> Amount:{ele.amount}</Card.Text></Col>
                                                                        </Row>
                                                                    </Card.Title>
                                                                    <Card.Subtitle>
                                                                        <Row>
                                                                            <Col><Card.Text>Date: {new Date(ele.date).toDateString()} </Card.Text></Col>
                                                                            <Col>
                                                                                <Card.Text> Status:{ele.status}</Card.Text></Col>
                                                                        </Row>

                                                                    </Card.Subtitle>
                                                                    {ele.status === 'Pending' && <Button variant="primary"
                                                                                                         onClick={() => {
                                                                                                             axios.post('/grants/approvegrant',
                                                                                                                 {applicationId: ele.applicationId}).then(res => {
                                                                                                                 console.log('gg', res.data)
                                                                                                                 if (res.data.status === 200){
                                                                                                                     this.onClickHandler()
                                                                                                                 }
                                                                                                             })
                                                                                                         }}>Approve Grant</Button>}
                                                                    {ele.status !== 'Pending' && <Button variant="primary">Granted</Button>}
                                                                    {(() => {
                                                                        // console.log(this.state.expanded)
                                                                        return this.state.expanded[this.state.data.indexOf(ele)]
                                                                    })() && <Card.Text>

                                                                        <Row style={{marginTop: "10px"}}>
                                                                            <Col><Card.Text> Application
                                                                                Id:{ele.applicationId}</Card.Text></Col>
                                                                            <Col><Card.Text>SanctionBy:{ele.sanctionedById}</Card.Text></Col>
                                                                        </Row>
                                                                        <Row style={{marginTop: "10px"}}>
                                                                            <Col><Card.Text> Amount:{ele.amount}</Card.Text></Col>
                                                                            <Col><Card.Text>Date:{new Date(ele.date).toDateString()}</Card.Text></Col>
                                                                        </Row>
                                                                    </Card.Text>}
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                        <Col sm={1}>
                                                            <svg onClick={() => {
                                                                let newArr = [...this.state.expanded]
                                                                let index = this.state.data.indexOf(ele)
                                                                newArr[index] = !newArr[index]
                                                                this.setState({expanded: newArr}, () => {
                                                                    console.log('s', index, this.state)
                                                                })
                                                            }} width="1em" height="1em" viewBox="0 0 16 16"
                                                                 className="bi bi-caret-down-fill" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                            </svg>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            )
                                        }
                                    })}</Container>
                                    <Container style={{color: 'green'}}>Received Grants</Container>
                                    <Container fluid>{this.state.data.map((ele) => {
                                        let grant_details = this.state.grants.filter(grant => {
                                            return grant.id === ele.grantId
                                        });
                                        console.log("[filter]", grant_details, this.state.grants, ele.grantId, ele.applicationId);
                                        if (ele.status !== 'Pending'){
                                            return (
                                                <Container key={ele._id}>
                                                    <Row style={{marginBottom: '2%'}}>
                                                        <Col sm={11}>
                                                            <Card key={ele._id}>
                                                                <Card.Body>
                                                                    <Card.Title>
                                                                        <Row>
                                                                            <Col> <Card.Text>Grant
                                                                                Name: {grant_details[0].grantName} </Card.Text></Col>
                                                                            <Col>
                                                                                <Card.Text> Amount:{ele.amount}</Card.Text></Col>
                                                                        </Row>
                                                                    </Card.Title>
                                                                    <Card.Subtitle>
                                                                        <Row>
                                                                            <Col><Card.Text>Date: {new Date(ele.date).toDateString()} </Card.Text></Col>
                                                                            <Col>
                                                                                <Card.Text> Status:{ele.status}</Card.Text></Col>
                                                                        </Row>

                                                                    </Card.Subtitle>
                                                                    {ele.status === 'Pending' && <Button variant="primary"
                                                                                                         onClick={() => {
                                                                                                             axios.post('/grants/approvegrant',
                                                                                                                 {applicationId: ele.applicationId}).then(res => {
                                                                                                                 console.log('gg', res.data)
                                                                                                                 if (res.data.status === 200){
                                                                                                                     this.onClickHandler()
                                                                                                                 }
                                                                                                             })
                                                                                                         }}>Approve Grant</Button>}
                                                                    {ele.status !== 'Pending' && <Button variant="primary">Granted</Button>}
                                                                    {(() => {
                                                                        // console.log(this.state.expanded)
                                                                        return this.state.expanded[this.state.data.indexOf(ele)]
                                                                    })() && <Card.Text>

                                                                        <Row style={{marginTop: "10px"}}>
                                                                            <Col><Card.Text> Application
                                                                                Id:{ele.applicationId}</Card.Text></Col>
                                                                            <Col><Card.Text>SanctionBy:{ele.sanctionedById}</Card.Text></Col>
                                                                        </Row>
                                                                        <Row style={{marginTop: "10px"}}>
                                                                            <Col><Card.Text> Amount:{ele.amount}</Card.Text></Col>
                                                                            <Col><Card.Text>Date:{new Date(ele.date).toDateString()}</Card.Text></Col>
                                                                        </Row>
                                                                    </Card.Text>}
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                        <Col sm={1}>
                                                            <svg onClick={() => {
                                                                let newArr = [...this.state.expanded]
                                                                let index = this.state.data.indexOf(ele)
                                                                newArr[index] = !newArr[index]
                                                                this.setState({expanded: newArr}, () => {
                                                                    console.log('s', index, this.state)
                                                                })
                                                            }} width="1em" height="1em" viewBox="0 0 16 16"
                                                                 className="bi bi-caret-down-fill" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                            </svg>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            )
                                        }
                                    })}</Container>
                                </Row>
                            </div>}
                            {
                                (this.state.length === 0) && (this.state.userExist) &&
                                <Row><Col style={{marginTop: '2%', marginBottom: '1%'}}>No Result.....</Col></Row>
                            }

                            {
                                (!this.state.userExist) &&
                                <div>
                                    <Row><Col style={{marginTop: '2%', marginBottom: '1%'}}>No User Exist</Col>
                                    </Row>
                                    <div style={{marginTop: '70px'}}>
                                        <Row className="justify-content-md-center">
                                            <br/><br/>
                                            <Col md={6}>
                                                <Link to="/LSGD_FRONT/registercitizen">
                                                    <Button variant="primary" block>Register Citizen</Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            }

                            {
                                (this.state.length != null) && (this.state.userExist) &&
                                <div style={{marginTop: '70px'}}>
                                    <Row className="justify-content-md-center">
                                        <br/><br/>
                                        <Col md={6}>
                                            <Button variant="primary" block
                                                    onClick={() => this.onClickApplyHandler(this.props)}>Apply New
                                                Grant</Button>
                                        </Col>
                                    </Row>
                                </div>
                            }
                        </Col>


                    </Row>
                </Container>
            </div>
        )
    }

}

export default ListGrant;
