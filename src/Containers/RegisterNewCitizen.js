import React, {Component} from 'react';
import AppBar from "../Components/AppBar/AppBar";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import RegisterNewCitizenForm from '../Components/RegisterNewCitizenForm';
import axios from '../axios';

class RegisterNewCitizen extends Component {
    state = {
        aadhar: '',
        name: null,
        dob: null,
        address: null,
        income: null,
        cast: null,
        religion: null,
        job: null,
        father_name: null,
        mother_name: null,
        password: null,
        spinning: false
    }
    onInputChangeHandler = (event) => {
        const event_name = event.target.id;
        this.setState({[event_name]: event.target.value})
        console.log(event_name,event.target.value)

    }
    onClickHandler = (event) => {
        event.preventDefault();
        this.setState({spinning: true});
        const body = {
            "aadhar": +this.state.aadhar,
            "name": this.state.name,
            "dob": this.state.dob,
            "address": this.state.address,
            "income": this.state.income,
            "cast": this.state.cast,
            "religion": this.state.religion,
            "job": this.state.job,
            "fathername": this.state.father_name,
            "mothername": this.state.mother_name,
            password: this.state.password
        }
        axios.post('/users/newcitizen', body)
            .then(response => {
                console.log(response);
                this.setState({spinning: false});
                if (response.data.status === 200) {
                    alert("Registration Succes")
                    this.props.history.goBack()
                } else {
                    alert("Registration Failed")
                }
   

            })
            .catch(err => {
                console.log(err);
                this.setState({spinning: false});
            })
    }

    render() {
        let registerLabel = "Register";
        if (this.state.spinning) {
            registerLabel = <Spinner animation="border"/>;
        }
        return (
            <div style={{width: '100%'}}>

                <Container fluid>
                    <Row>
                        <AppBar/>
                    </Row>
                    <RegisterNewCitizenForm state={this.state} registerLabel={registerLabel} onInputChange={this.onInputChangeHandler}
                                            onClickHandler={this.onClickHandler}/>
                </Container>
            </div>
        )
    }
}

export default RegisterNewCitizen;
