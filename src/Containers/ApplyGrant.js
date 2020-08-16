import React,{Component} from 'react';

import AppBar from "../Components/AppBar/AppBar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ApplyGrantForm from '../Components/ApplyGrantForm';
import axios from '../axios';

class ApplyGrant extends Component{
    state={
        details:null,
        something:null
    }
    componentWillMount(){
        console.log(this.props.location.state);
        let name='';
        const body={"aadhar":+this.props.location.state.aadhar}
        axios.post('/users/getcitizeninfo',body)
            .then(response=>{
                console.log('[status]',response);
                if(response.data.status===200){
                   name=response.data.data.name; 
                   console.log(name);  
                   this.setState({...this.props.location.state,name:name})
                }
            })
            .catch(err=>{
                console.log(err);
            })
        
    }

    onInputChangeHandler=(event)=>{
        const event_name=event.target.id;
        this.setState({[event_name]:event.target.value})
        
    }
    onClickHandler=(event)=>{
        event.preventDefault();
        console.log("hasidj");
        const body={"aadhar":+this.state.aadhar,"name":this.state.name,"dob":this.state.dob,"address":this.state.address,"income":this.state.income,"cast":this.state.cast,"religion":this.state.religion,"job":this.state.job,"fathername":this.state.father_name,"mothername":this.state.mother_name}
        axios.post('/users/newcitizen',body)
            .then(response=>{
                console.log(response);
            })
            .catch(err=>{
                console.log(err);
            })

    }
    render(){
        return(
            <div style={{width: '100%'}}>
                {console.log("[dfdf]",this.state)}
            <Container fluid>
                <Row>
                    <AppBar/>
                </Row>
                <ApplyGrantForm state={this.state} something={this.state.something} onInputChange={this.onInputChangeHandler} onClickHandler={this.onClickHandler}/>
            </Container>
            </div>
        )
    }

}

export default ApplyGrant; 