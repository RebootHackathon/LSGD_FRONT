import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
class CitizenMainPage extends Component {
    render() {
        return (
            <div>
            <Link to="/citizenviewallgrants">
            <Button block variant="primary">View All grants</Button>
        </Link>
        <Link to="/citizenappliedgrants">
            <Button block variant="primary">View applied Grants</Button>
        </Link>
        </div>
        )}
}

export default CitizenMainPage;