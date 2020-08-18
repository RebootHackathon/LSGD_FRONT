import React from 'react';


import Button from "react-bootstrap/Button";

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from "react-bootstrap/FormControl";
import FormFile from "react-bootstrap/FormFile";
import Card from 'react-bootstrap/Card';

import FormElement from './FormElement';

const ApplyGrantForm = (props) => {
    let grants = [];
    grants = props.state.grants;
    console.log("[grant apform]", grants);
    let optionItems = grants.map(ele => {
        console.log("[from ele]", ele);
        return (<option key={ele.id} value={ele.id}>{ele.grantName}</option>)
    })
    return (
        <div style={{width: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Card style={{width: '70%', alignItems: 'center', marginTop: '4%'}}>
                    <Card.Img variant="top" src={require('../assets/tick.png')}
                              style={{paddingTop: '5%', height: '25%', width: '15%'}}/>

                    {/* <Card.Img variant="top" src={require('../assets/aadharlogo.png')} /> */}
                    <Card.Body>

                        <Card.Title style={{display: 'flex', justifyContent: 'center', paddingBottom: '20px'}}><strong>Enter
                            Details</strong></Card.Title>
                        <FormElement label='Aadhar Number' id='aadhar' value={props.state.aadhar}
                                     onChange={props.onInputChange} disabled/>
                        <FormElement label='Name' id='name' value={props.state.name} onChange={props.onInputChange}
                                     disabled/>

                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">Grant Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="select" id="grant" onChange={props.onInputChange}>
                                {/* <option  value="ele.id">ele.grantName</option>
                                    <option  value="ele.id3">ele.grantName3</option>
                                    <option  value="ele.id2">ele.grantName2</option> */}
                                {optionItems}

                            </FormControl>
                        </InputGroup>


                        <FormElement label='Amount' id='amount' value={props.state.amount}
                                     onChange={props.onInputChange}/>

                        <FormFile className="mb-3"
                                  id="custom-file-translate-scss"
                                  label="Choose a file"
                                  lang="en"
                                  custom

                        />

                        {/*<FormElement label='Applied By' id='applied_by' value={props.state.applied_by}*/}
                        {/*             onChange={props.onInputChange}/>*/}

                        <Button variant="primary" block type="submit" onClick={props.onClickHandler}>
                            {props.applyLabel}
                        </Button>

                    </Card.Body>
                </Card>
            </div>
        </div>

    )
}

export default ApplyGrantForm;
