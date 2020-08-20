import React from 'react';
import PropTypes from 'prop-types';
import styles from './UploadBulk.module.css';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "../../axios";
import FormFile from "react-bootstrap/FormFile";
import Card from "react-bootstrap/Card";

class UploadBulk extends React.Component {
    state = {
        filename: 'Choose File',
        filename1: 'Choose File',
        fileid: null,
        grants:null
    }
    render() {

        return (
            <Container style={{marginTop: '10px'}}>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={require('../../assets/cardbg1.png')} />
                                    <Card.Body>
                                        <Card.Title>Upload Grants</Card.Title>
                                        <FormFile className="mb-3"
                                                  id="custom-file-translate-scss"
                                                  label={this.state.filename1}
                                                  lang="en"
                                                  custom
                                                  onChange={event => {
                                                      const data = new FormData()
                                                      data.append('file', event.target.files[0])
                                                      console.log('uploading')
                                                      this.setState({filename1: 'Uploading....'})
                                                      axios.post("/upload", data, { // receive two parameter endpoint url ,form data
                                                      })
                                                          .then(res => { // then print response status
                                                              console.log(res);
                                                              this.setState({fileid: res.data.fileid})
                                                              this.setState({filename1: 'Uploading Completed'})
                                                          })
                                                  }}
                                        />
                                    </Card.Body>
                                    <Card.Footer>
                                        <Card.Text>
                                            Kerala Government Initiative
                                        </Card.Text>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={require('../../assets/cardbg1.png')} />
                                    <Card.Body>
                                        <Card.Title>Upload Employee</Card.Title>
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
                                                              this.setState({filename: 'Uploading Completed'})
                                                          })
                                                  }}
                                        />
                                    </Card.Body>
                                    <Card.Footer>
                                        <Card.Text>
                                            Kerala Government Initiative
                                        </Card.Text>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

UploadBulk.propTypes = {};

UploadBulk.defaultProps = {};

export default UploadBulk;
