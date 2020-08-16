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
        length:0,
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
                                <Row><Col style={{marginTop: '2%', marginBottom: '2%'}}>Result</Col></Row>
                                <Row><Container fluid>{this.state.data.map((ele)=>{
                                    return (
                                        <Card key={ele._id}>
                                            <Card.Body>
                                                <Card.Title>{ele.grantId}</Card.Title>
                                                <Card.Subtitle>
                                                    {new Date(ele.date).toDateString()}
                                                </Card.Subtitle>
                                                <Button variant="primary" onClick={() => {
                                                    let newArr = [...this.state.expanded]
                                                    let index = this.state.data.indexOf(ele)
                                                    newArr[index] = !newArr[index]
                                                    this.setState({expanded: newArr}, () => {
                                                        console.log('s', index, this.state)
                                                    })
                                                }}>Expand</Button>
                                                {(()=>{
                                                    // console.log(this.state.expanded)
                                                    return this.state.expanded[this.state.data.indexOf(ele)]
                                                })() && <Card.Text>
                                                    All the Details should be showed here
                                                </Card.Text>}
                                            </Card.Body>
                                        </Card>
                                    )
                                })}</Container></Row>
                            </div>}
                            {
                                (this.state.length===0 && this.state.aadhar.length>=12) &&
                                <Row><Col>No Result</Col></Row>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

export default ListGrant;
