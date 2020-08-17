import React,{Component} from 'react';

import AppBar from "../Components/AppBar/AppBar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import ApplyGrantForm from '../Components/ApplyGrantForm';
import axios from '../axios';

class ApplyGrant extends Component{
    state={
        details:null,
        grants:[],
        spinning:false
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

        axios.get('/grants/getgrants')
        .then(response=>{
            console.log('[GRANTS]',response);
            if(response.data.status===200){
                const len=response.data.data.length;
                const grantArray=[];
                for (let index = 0; index < len; index++) {
                    const id = response.data.data[index]._id;
                    const grantName=response.data.data[index].grant_name;
                    grantArray.push({"id":id,"grantName":grantName});
                    
                     
                } 
                this.setState({grants:[...grantArray]})
                console.log(this.state);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    
    }

    onInputChangeHandler=(event)=>{
        const event_name=event.target.id;
        this.setState({[event_name]:event.target.value})
        console.log("[applygrant]",this.state);
        
    }
    onClickHandler=(event)=>{
        event.preventDefault();
        this.setState({spinning:true});
        console.log("hasidj");
        const body={"applicationId":Date.now(),"citizenId":+this.state.aadhar,"grantId":this.state.grant,"amount":+this.state.amount,"status":"Pending","sanctionedById":+this.state.applied_by}
        axios.post('/grants/sanction',body)
            .then(response=>{
                console.log(response);
                this.setState({spinning:false});
                alert("Grant Applied Successfully")
                this.props.history.goBack()
            })
            .catch(err=>{
                this.setState({spinning:false});
                alert("Error Occured!")
                console.log(err);
            })

    }
    render(){
        let applyLabel="Apply";
        if(this.state.spinning){
            applyLabel=<Spinner animation="border" />;
        }
        return(
            <div style={{width: '100%'}}>
                {console.log("[dfdf]",this.state)}
            <Container fluid>
                <Row>
                    <AppBar/>
                </Row>
                <ApplyGrantForm state={this.state} applyLabel={applyLabel} onInputChange={this.onInputChangeHandler} onClickHandler={this.onClickHandler}/>
            </Container>
            </div>
        )
    }

}

export default ApplyGrant; 