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
        const body={"applicationId":Date.now(),"citizenId":+this.state.aadhar,"grantId":+this.state.grant,"amount":+this.state.amount,"status":"Pending","sanctionedById":+this.state.applied_by}
        axios.post('/grants/sanction',body)
            .then(response=>{
                console.log(response);
                alert("Grant Applied Successfully")
                this.props.history.goBack()
            })
            .catch(err=>{
                alert("Error Occured!")
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