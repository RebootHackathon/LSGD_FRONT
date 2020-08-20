import React, {useState} from 'react';

import axios from '../axios';

import Button from "react-bootstrap/Button";

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from "react-bootstrap/FormControl";
import FormFile from "react-bootstrap/FormFile";
import Card from 'react-bootstrap/Card';

import FormElement from './FormElement';

class ApplyGrantForm extends React.Component{
    state = {
        filename: 'Choose File',
        fileid: null
    }
    grants = [];
    constructor(props) {
        super(props);
        this.props = props
        this.grants = this.props.state.grants;
        console.log('gg',this.grants)
        // this.optionItems =
    } 
    // console.log("[grant apform]", grants);


    render(){
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
                            <FormElement label='Aadhar Number' id='aadhar' value={this.props.state.aadhar}
                                         onChange={this.props.onInputChange} disabled/>
                            <FormElement label='Name' id='name' value={this.props.state.name} onChange={this.props.onInputChange}
                                         disabled/>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Grant Name</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl as="select" id="grant" onChange={this.props.onInputChange}>
                                    {/* <option  value="ele.id">ele.grantName</option>
                                    <option  value="ele.id3">ele.grantName3</option>
                                    <option  value="ele.id2">ele.grantName2</option> */}
                                    {this.grants.map(ele => {
                                        console.log("[from ele]", ele);
                                        return (<option key={ele.id} value={ele.id}>{ele.grantName}</option>)
                                    })}

                                </FormControl>
                            </InputGroup>


                            <FormElement label='Amount' id='amount' value={this.props.state.amount}
                                         onChange={this.props.onInputChange}/>

                            {/*<input type="file" name="file" onChange={event => {*/}
                            {/*    const data = new FormData()*/}
                            {/*    data.append('file', event.target.files[0])*/}
                            {/*    console.log('uploading')*/}
                            {/*    axios.post("http://localhost:8000/upload", data, { // receive two parameter endpoint url ,form data*/}
                            {/*    })*/}
                            {/*        .then(res => { // then print response status*/}
                            {/*            console.log(res);*/}
                            {/*            this.fileid = res.fileid*/}
                            {/*        })*/}
                            {/*}}/>*/}

                            <FormFile className="mb-3"
                                      id="custom-file-translate-scss"
                                      label={this.state.filename}
                                      lang="en"
                                      custom
                                      onChange={event => {

                                          const data = new FormData()
                                          data.append('file', event.target.files[0])
                                          console.log('uploading')
                                          this.setState({filename: 'Uploading....'})
                                          axios.post("/upload", data, { // receive two parameter endpoint url ,form data
                                          })
                                              .then(res => { // then print response status
                                                  console.log(res);
                                                  this.setState({fileid: res.data.fileid})
                                              })
                                      }}
                            />

                            {/*<FormElement label='Applied By' id='applied_by' value={this.props.state.applied_by}*/}
                            {/*             onChange={this.props.onInputChange}/>*/}
                            {/*<form ref='uploadForm'*/}
                            {/*      id='uploadForm'*/}
                            {/*      action='http://localhost:8000/upload'*/}
                            {/*      method='post'*/}
                            {/*      encType="multipart/form-data">*/}
                            {/*    <input type="file" name="sampleFile" />*/}
                            {/*    <input type='submit' value='Upload!' />*/}
                            {/*</form>*/}

                            {this.state.fileid !== null &&
                            <Button variant="primary" block type="submit" onClick={this.props.onClickHandler}>
                                {this.props.applyLabel}
                            </Button>
                            }
                            {this.state.fileid === null &&
                            <Button variant="primary" block type="submit" disabled={true}>
                                File Not Choosed
                            </Button>
                            }
                        </Card.Body>
                    </Card>
                </div>
            </div>

        )
    }
}

export default ApplyGrantForm;
