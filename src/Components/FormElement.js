import React from 'react';
import FormControl from "react-bootstrap/FormControl";
import InputGroup from 'react-bootstrap/InputGroup'

const FormElement =(props)=>{

    return  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">{props.label}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder={props.label}
                                aria-describedby="basic-addon1"
                                id={props.id}
                                value={props.value}
                                onChange={props.onChange} disabled={props.disabled}/>
            </InputGroup>
            
}

export default FormElement;