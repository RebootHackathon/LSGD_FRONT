import React,{Component} from 'react';
import AppBar from "../Components/AppBar/AppBar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import RegisterNewCitizenForm from '../Components/RegisterNewCitizenForm';
import axios from '../axios';

class RegisterNewCitizen extends Component{
    state={
        aadhar:null,
        name:null,
        dob:null,
        address:null,
        income:null,
        cast:null,
        religion:null,
        job:null,
        father_name:null,
        mother_name:null
    }
    onInputChangeHandler=(event)=>{
        const event_name=event.target.id;
        this.setState({[event_name]:event.target.value})
        
    }
    onClickHandler=(event)=>{
        event.preventDefault();
       
        const body={"aadhar":+this.state.aadhar,"name":this.state.name,"dob":this.state.dob,"address":this.state.address,"income":this.state.income,"cast":this.state.cast,"religion":this.state.religion,"job":this.state.job,"fathername":this.state.father_name,"mothername":this.state.mother_name}
        axios.post('/users/newcitizen',body)
            .then(response=>{
                console.log(response);
                if(response.data.status===200){
                    alert("Registration Succes")
                    this.props.history.goBack()
                }else{
                    alert("Registration Failed")
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
            <RegisterNewCitizenForm onInputChange={this.onInputChangeHandler} onClickHandler={this.onClickHandler}/>
        </Container>
        </div>
        )
    }
}

export default RegisterNewCitizen;