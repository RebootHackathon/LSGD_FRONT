import React from 'react';
import styles from './Posts.module.css';
import {Button, Card, Col, Container, FormControl, InputGroup, Row} from 'react-bootstrap'
import axios from "../../axios";

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts_list: []
        }
        this.newPostsData = {
            post_name: null,
            post_description: null,
        }

        this.createPosts = this.createPosts.bind(this)
        this.getPosts = this.getPosts.bind(this)
        this.getPosts()
    }

    getPosts() {
        axios.get('/designation/getposts')
            .then(response => {
                console.log(response);
                if (response.data.status === 200) {
                    this.setState({posts_list: response.data.data})
                } else {
                    this.setState({posts_list: []})
                }
            }).catch(err => {
            console.log(err);
        })
    }

    createPosts(e) {
        console.log(this.newPostsData)
        axios.post('/designation/createpost', this.newPostsData)
            .then(response => {
                console.log(response);
                if (response.data.status === 200) {

                } else {
                }
            }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className={styles.Posts}>
                <Container fluid>
                    <Row>
                        <Col md={3}>
                            <Card style={{width: '90%', marginTop: '5%'}}>
                                <Card.Img variant="top" src={require('../../assets/cardbg1.png')}
                                          style={{ height: '20%', width: '100%'}}/>
                                <Card.Body>
                                    <Card.Title>Add New Post</Card.Title>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            onChange={(e) => {
                                                this.newPostsData.post_name = e.target.value;
                                            }}
                                            placeholder="Post Name"
                                            aria-label="name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            onChange={(e) => {
                                                this.newPostsData.post_description = e.target.value;
                                            }}
                                            placeholder="Post Description"
                                            aria-label="name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    <Button variant="primary" onClick={this.createPosts}>Create post</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={9}>
                            <Row style={{marginBottom: '10px', marginTop: '20px'}}>
                                <Container style={{fontSize: 'large'}}>ALL POSTS...</Container>
                                <Container>Refresh</Container>
                            </Row>
                            <Row>
                                <Container>
                                    {this.state.posts_list.map((ele) => {

                                        return (
                                            <Card style={{width: '90%'}} key={ele._id}>
                                                {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                                                <Card.Body>
                                                    <Card.Title>
                                                        {ele.post_name}
                                                    </Card.Title>
                                                    <Card.Subtitle>
                                                        {ele.post_description}
                                                    </Card.Subtitle>
                                                    <Card.Text>
                                                        Created On {new Date(ele.created_at).toDateString()}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        )
                                    })}

                                </Container>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                </Container>
            </div>
        )
    }
}

Posts.propTypes = {};

Posts.defaultProps = {};

export default Posts;
