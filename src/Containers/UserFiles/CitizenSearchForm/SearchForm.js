import React from 'react';

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from "react-bootstrap/FormControl";

const SearchForm = (props) => {
    return (
        <div style={{width: '100%'}}>
            <Card style={{width: '18rem', marginTop: '4%'}}>
                <Card.Img variant="top" src={require('../../../assets/aadharlogo.png')}/>
                <Card.Body>
                    <Card.Title>{props.aadharHeaderLabel}</Card.Title>
                    <Card.Text>
                        {props.descriptionLabel}
                    </Card.Text>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder={props.aadharLabel}
                            aria-label="Aadhar-Number"
                            aria-describedby="basic-addon1"
                            value={props.value}
                            onChange={props.onInputChange}
                        />
                    </InputGroup>
                    <Button variant="primary" block onClick={props.clicked}>{props.searchLabel}</Button>
                </Card.Body>
            </Card>
        </div>
    )

}

export default SearchForm;
