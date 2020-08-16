import React, {Component, useState} from 'react';

import SearchForm from '../Components/SearchForm/SearchForm';
import axios from '../axios';
import CardView from '../Components/CardView/CardView';
import ExpandCard from '../Components/CardView/ExpandCard';
import {Redirect} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import AppBar from "../Components/AppBar/AppBar";

class ListGrant extends Component{
    state={
        aadhar:'',
        length:null,
        data:[],
        expanded: []
    };

    // onCardClickHandler=(id)=>{
    //     const expand_element=this.state.data.filter(ele=>(
    //         ele._id===id
    //     ))
    //     this.props.location.state=this.state;
    //     console.log(this.props,"qwerty");
    //     this.props.history.push(  {pathname:'/LSGD_FRONT/'+id, state: { detail: expand_element,setstate:this.state }});
    // }
    onChangeHandler=(event)=>{
        this.setState({aadhar:event.target.value})
    }
    onClickHandler=(event)=>{
        const body={"citizenId":+this.state.aadhar}
        axios.post('/grants/getGrantsOfSpecificCitizen',body)
            .then(response=>{
                console.log(response);
                if(response.data.data.length>0){
                    this.setState({expanded: new Array(response.data.data.length).fill(false)})
                    this.setState({data:response.data.data, length:response.data.data.length});
                }else{
                    this.setState({
                        length:0,
                        data:[]
                    }
                )
                }
            })
            .catch(err=>{
                console.log(err);
            })
    }
    onClickApplyHandler(props){
        props.history.push({pathname:'/LSGD_FRONT/applygrant', state: this.state})
    }
    render(){
        return(
            <div style={{width: '100%'}}>
                <Container fluid>
                    <Row>
                        <AppBar/>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <SearchForm onInputChange={this.onChangeHandler} value={this.state.aadhar} clicked={this.onClickHandler}/>
                        </Col>
                        <Col md={9}>
                            {this.state.length>0 && <div>
                                <Row><Col style={{marginTop: '2%', marginBottom: '1%'}}>Result</Col></Row>
                                <Row><Container fluid>{this.state.data.map((ele)=>{
                                    return (
                                        <Container>
                                            <Row style={{marginBottom: '2%'}}>
                                                <Col sm={11}>
                                                    <Card key={ele._id}>
                                                        <Card.Body>
                                                            <Card.Title>{ele.grantId}</Card.Title>
                                                            <Card.Subtitle>
                                                                {new Date(ele.date).toDateString()}
                                                            </Card.Subtitle>
                                                            {/*<Button variant="primary">Expand</Button>*/}
                                                            {(()=>{
                                                                // console.log(this.state.expanded)
                                                                return this.state.expanded[this.state.data.indexOf(ele)]
                                                            })() && <Card.Text>
                                                                All the Details should be showed here
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
                                })}</Container></Row>
                            </div>}
                            {
                                (this.state.length===0) &&
                                <Row><Col style={{marginTop: '2%', marginBottom: '1%'}}>No Result.....</Col></Row>
                            }

                            {
                                (this.state.length!=null) &&
                                    <div style={{marginTop:'70px'}}>
                                        <Row className="justify-content-md-center" >
                                            <br/><br/>
                                            <Col  md={6}>
                                                <Button  variant="primary" block onClick={()=>this.onClickApplyHandler(this.props)}>Apply New Grant</Button>
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
