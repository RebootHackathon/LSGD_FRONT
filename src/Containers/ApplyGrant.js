import React,{Component} from 'react';

import AppBar from "../Components/AppBar/AppBar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ApplyGrantForm from '../Components/ApplyGrantForm';

class ApplyGrant extends Component{
    state={
        details:null,
        something:null
    }
    componentWillMount(){
        this.setState({...this.props.location.state})
    }

    onInputChangeHandler=(event)=>{
        const event_name=event.target.id;
        this.setState({[event_name]:event.target.value})
        
    }
    render(){
        return(
            <div style={{width: '100%'}}>
                {console.log("[dfdf]",this.state)}
            <Container fluid>
                <Row>
                    <AppBar/>
                </Row>
                <ApplyGrantForm state={this.state} something={this.state.something} onInputChange={this.onInputChangeHandler}/>
            </Container>
            </div>
        )
    }

}

export default ApplyGrant; 