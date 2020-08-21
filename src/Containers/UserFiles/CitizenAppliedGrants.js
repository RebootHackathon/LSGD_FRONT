import React, {Component} from 'react';

import SearchForm from './CitizenSearchForm/SearchForm';
import axios from '../../axios';

import {Link} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import AppBar from "../../Components/CitizenAppBar/AppBar";
import Spinner from 'react-bootstrap/Spinner';
import { connect } from 'react-redux';

class ListGrant extends Component {
    state = {
        aadhar: '',
        length: null,
        data: [],
        expanded: [],
        userExist: true,
        spinning: false,
        grants: [],
        aadharHeaderLabel:'ആധാർ നമ്പർ നൽകുക',
        descriptionLabel:'നിങ്ങൾ അപേക്ഷിച്ച ഗ്രാന്റുകൾ കണ്ടുപിടിക്കാൻ',
        aadharLabel:'ആധാർ',
        searchLabel:'തിരയുക',
        resultLabel:'ഫലം',
        pendinggrantLabel:'അനുവദിക്കാൻ ബാക്കിയുള്ള ഗ്രാന്റ്‌സ്',
        grantNameLabel:'ഗ്രാന്റിന്റെ പേര്',
        amountLabel:'രൂപ',
        dateLabel:'ദിവസം',
        statusLabel:'അവസ്ഥ',
        applicationIdLabel:'അപേക്ഷ നമ്പർ',
        sanctionedByIdLabel:'അനുവദിച്ചത്',
        receivedgrantLAbel:'ലഭിച്ച ഗ്രാന്റുകൾ',
        applynewgrantLabel:'പുതിയ ഗ്രാന്റിനി അപേക്ഷിക്കാം',
        noresultLable:'ഒരു ഫലവും ഇല്ല',
        nouserLabel:'നിങ്ങൾ അടിച്ച നമ്പർ തെറ്റ്',
        malayalamLanguage:true
    };

    constructor(props) {
        super(props);
        this.onClickHandler();
    }
    componentWillMount(){
        if(this.props.malayalamLanguage){
            console.log("malayalam vannu");
            this.changeMalayalamHandler(this);
        }else{
            console.log("english vannu");
            this.changeEnglishHandler(this);
        }
        console.log("[malayalamcheck]",this.state);
       }
    // onCardClickHandler=(id)=>{
    //     const expand_element=this.state.data.filter(ele=>(
    //         ele._id===id
    //     ))
    //     this.props.location.state=this.state;
    //     console.log(this.props,"qwerty");
    //     this.props.history.push(  {pathname:'/LSGD_FRONT/'+id, state: { detail: expand_element,setstate:this.state }});
    // }

    onChangeHandler = (event) => {
        this.setState({aadhar: event.target.value})
    }
    onClickHandler = (event) => {
        this.setState({spinning: true});
        const body = {"citizenId": +this.state.aadhar}
        axios.post('/grants/getmygrants', body)
            .then(response => {
                console.log('specific', response);
                this.setState({spinning: false});
                if (response.data.data.length > 0) {
                    this.setState({expanded: new Array(response.data.data.length).fill(false)})
                    this.setState({data: response.data.data, length: response.data.data.length});
                } else {
                    this.setState({
                            length: 0,
                            data: []
                        }
                    )
                }
            })
            .catch(err => {
                this.setState({spinning: false});
                console.log(err);
            })
        const body1 = {"aadhar": +this.state.aadhar}
        axios.post('/users/getcitizeninfo', body1)
            .then(response => {
                this.setState({spinning: false});
                console.log('[status]', response);
                if (response.data.status === 200) {
                    this.setState({userExist: true})
                    console.log(response);

                }
                if (response.data.status === 201) {
                    this.setState({userExist: false});
                    console.log('[user check]', this.state.userExist);
                }
            })
            .catch(err => {
                this.setState({spinning: false});
                console.log(err);
            })

        axios.get('/grants/getgrants')
            .then(response => {
                console.log('[GRANTS]', response);
                if (response.data.status === 200) {
                    const len = response.data.data.length;
                    const grantArray = [];
                    for (let index = 0; index < len; index++) {
                        const id = response.data.data[index]._id;
                        const grantName = response.data.data[index].grant_name;
                        grantArray.push({"id": id, "grantName": grantName});


                    }
                    this.setState({grants: [...grantArray]})
                    console.log(this.state);
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    onClickApplyHandler(props) {
        props.history.push({pathname: '/citizenapplygrant', state: this.state})
    }

    changeEnglishHandler(this_local){
        this.props.onEnglish();
        this_local.setState({
            malayalamLanguage:false,
            aadharHeaderLabel:'Enter Aadhar',
            descriptionLabel:'View the applied grants using aadhar number',
            aadharLabel:'Aadhar',
            searchLabel:'Search',
            resultLabel:'Result',
            pendinggrantLabel:'Pending Grants',
            grantNameLabel:'Grant Name',
            amountLabel:'Amount',
            dateLabel:'Date',
            statusLabel:'Status',
            applicationIdLabel:'Application Id',
            sanctionedByIdLabel:'SanctoinedById',
            receivedgrantLAbel:'Received Grants',
            applynewgrantLabel:'Apply for new grants',
            noresultLable:'No Result',
            nouserLabel:'No User exist',})
    }
    changeMalayalamHandler(this_local){
        this.props.onMalayalam();
        this_local.setState({
            malayalamLanguage:true,
            aadharHeaderLabel:'ആധാർ നമ്പർ നൽകുക',
            descriptionLabel:'നിങ്ങൾ അപേക്ഷിച്ച ഗ്രാന്റുകൾ കണ്ടുപിടിക്കാൻ',
            aadharLabel:'ആധാർ',
            searchLabel:'തിരയുക',
            resultLabel:'ഫലം',
            pendinggrantLabel:'അനുവദിക്കാൻ ബാക്കിയുള്ള ഗ്രാന്റ്‌സ്',
            grantNameLabel:'ഗ്രാന്റിന്റെ പേര്',
            amountLabel:'രൂപ',
            dateLabel:'ദിവസം',
            statusLabel:'അവസ്ഥ',
            applicationIdLabel:'അപേക്ഷ നമ്പർ',
            sanctionedByIdLabel:'അനുവദിച്ചത്',
            receivedgrantLAbel:'ലഭിച്ച ഗ്രാന്റുകൾ',
            applynewgrantLabel:'പുതിയ ഗ്രാന്റിനി അപേക്ഷിക്കാം',
            noresultLable:'ഒരു ഫലവും ഇല്ല',
            nouserLabel:'നിങ്ങൾ അടിച്ച നമ്പർ തെറ്റ്'
        })
    }
    
    render() {
        // let searchLabel = "Search";
        if (this.state.spinning) {
        //    this.setSpinner();
            console.log("spinner");
        }
        let malayalamLabel="മലയാളം";
        let englishLabel="English";
        return (
            <div style={{width: '100%'}}>
                <Container fluid>
                    <Row>
                        <AppBar/>
                        <div style={{marginLeft:"75%", textAlign: 'left',cursor:"pointer"}} onClick={()=>this.changeEnglishHandler(this)}>
                                        {englishLabel}</div>
                                    <div style={{marginLeft:"15px", textAlign: 'left',cursor:"pointer"}} onClick={()=>this.changeMalayalamHandler(this)}>
                                        {malayalamLabel}</div>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require('../../assets/cardbg1.png')} />
                                <Card.Body>
                                    <Card.Title>Applied Grants</Card.Title>
                                    <Card.Text>
                                        This page shows all your applied grants
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Card.Text>
                                        Kerala Government Initiative
                                    </Card.Text>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col md={9}>
                            {this.state.length > 0 && <div>
                                <Row><Col style={{marginTop: '2%', marginBottom: '1%'}}>{this.state.resultLabel}</Col></Row>
                                <Row>
                                    <Container style={{color: 'orange'}}>{this.state.pendinggrantLabel}</Container>
                                    <Container fluid>{this.state.data.map((ele) => {
                                        let grant_details = this.state.grants.filter(grant => {
                                            return grant.id === ele.grantId
                                        });
                                        console.log("[filter]", grant_details, this.state.grants, ele.grantId, ele.applicationId);
                                        if (ele.status === 'Pending'){
                                            return (
                                                <Container key={ele._id}>
                                                    <Row style={{marginBottom: '2%'}}>
                                                        <Col sm={11}>
                                                            <Card key={ele._id}>
                                                                <Card.Body>
                                                                    <Card.Title>
                                                                        <Row>
                                                                            <Col> <Card.Text>{this.state.grantNameLabel} : {grant_details[0].grantName}
                                                                                {(()=>{
                                                                                    if (ele.intact){
                                                                                        return <div style={{color: 'green'}}>
                                                                                            Signature Verified
                                                                                        </div>
                                                                                    }else {
                                                                                        return <div style={{color: 'red'}}>
                                                                                            Signature Error
                                                                                        </div>
                                                                                    }
                                                                                })()}
                                                                            </Card.Text></Col>
                                                                            <Col>
                                                                                <Card.Text> {this.state.amountLabel}:{ele.amount}</Card.Text></Col>
                                                                        </Row>
                                                                    </Card.Title>
                                                                    <Card.Subtitle>
                                                                        <Row>
                                                                            <Col><Card.Text>{this.state.dateLabel}: {new Date(ele.date).toDateString()} </Card.Text></Col>
                                                                            <Col>
                                                                                <Card.Text> {this.state.statusLabel}:{ele.status}</Card.Text></Col>
                                                                        </Row>

                                                                    </Card.Subtitle>
                                                                    {/* {ele.status === 'Pending' && <Button variant="primary"
                                                                                                         onClick={() => {
                                                                                                             axios.post('/grants/approvegrant',
                                                                                                                 {applicationId: ele.applicationId}).then(res => {
                                                                                                                 console.log('gg', res.data)
                                                                                                                 if (res.data.status === 200){
                                                                                                                     this.onClickHandler()
                                                                                                                 }
                                                                                                             })
                                                                                                         }}>Approve Grant</Button>}
                                                                    {ele.status !== 'Pending' && <Button variant="primary">Granted</Button>} */}
                                                                    {(() => {
                                                                        // console.log(this.state.expanded)
                                                                        return this.state.expanded[this.state.data.indexOf(ele)]
                                                                    })() && <Card.Text>

                                                                        <Row style={{marginTop: "10px"}}>
                                                                            <Col><Card.Text> {this.state.applicationIdLabel}:{ele.applicationId}</Card.Text></Col>
                                                                            <Col><Card.Text>{this.state.sanctionedByIdLabel}:{ele.sanctionedById}</Card.Text></Col>
                                                                        </Row>
                                                                        <Row style={{marginTop: "10px"}}>
                                                                            <Col><Card.Text> {this.state.amountLabel}:{ele.amount}</Card.Text></Col>
                                                                            <Col><Card.Text>{this.state.dateLabel}:{new Date(ele.date).toDateString()}</Card.Text></Col>
                                                                        </Row>
                                                                    </Card.Text>}
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                        <Col sm={1}>
                                                            <svg onClick={() => {
                                                                let newArr = [...this.state.expanded]
                                                                let index = this.state.data.indexOf(ele)
                                                                newArr[index] = !newArr[index]
                                                                this.setState({expanded: newArr}, () => {
                                                                    console.log('s', index, this.state)
                                                                })
                                                            }} width="1em" height="1em" viewBox="0 0 16 16"
                                                                 className="bi bi-caret-down-fill" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                            </svg>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            )
                                        }
                                    })}</Container>
                                    <Container style={{color: 'green'}}>{this.state.receivedgrantLAbel}</Container>
                                    <Container fluid>{this.state.data.map((ele) => {
                                        let grant_details = this.state.grants.filter(grant => {
                                            return grant.id === ele.grantId
                                        });
                                        console.log("[filter]", grant_details, this.state.grants, ele.grantId, ele.applicationId);
                                        if (ele.status !== 'Pending'){
                                            return (
                                                <Container key={ele._id}>
                                                    <Row style={{marginBottom: '2%'}}>
                                                        <Col sm={11}>
                                                            <Card key={ele._id}>
                                                                <Card.Body>
                                                                    <Card.Title>
                                                                        <Row>

                                                                            <Col> <Card.Text>{this.state.grantNameLabel}: {grant_details[0].grantName} {(()=>{
                                                                                    if (ele.intact){
                                                                                        return <div style={{color: 'green'}}>
                                                                                            Signature Verified
                                                                                        </div>
                                                                                    }else {
                                                                                        return <div style={{color: 'red'}}>
                                                                                            Signature Error
                                                                                        </div>
                                                                                    }
                                                                                })()}</Card.Text></Col>
                                                                            <Col>
                                                                                <Card.Text> {this.state.amountLabel}:{ele.amount}</Card.Text></Col>
                                                                        </Row>
                                                                    </Card.Title>
                                                                    <Card.Subtitle>
                                                                        <Row>
                                                                            <Col><Card.Text>{this.state.dateLabel}: {new Date(ele.date).toDateString()} </Card.Text></Col>
                                                                            <Col>
                                                                                <Card.Text> {this.state.statusLabel}:{ele.status}</Card.Text></Col>
                                                                        </Row>

                                                                    </Card.Subtitle>
                                                                    {/* {ele.status === 'Pending' && <Button variant="primary"
                                                                                                         onClick={() => {
                                                                                                             axios.post('/grants/approvegrant',
                                                                                                                 {applicationId: ele.applicationId}).then(res => {
                                                                                                                 console.log('gg', res.data)
                                                                                                                 if (res.data.status === 200){
                                                                                                                     this.onClickHandler()
                                                                                                                 }
                                                                                                             })
                                                                                                         }}>Approve Grant</Button>}
                                                                    {ele.status !== 'Pending' && <Button variant="primary">Granted</Button>} */}
                                                                    {(() => {
                                                                        // console.log(this.state.expanded)
                                                                        return this.state.expanded[this.state.data.indexOf(ele)]
                                                                    })() && <Card.Text>

                                                                        <Row style={{marginTop: "10px"}}>
                                                                            <Col><Card.Text> {this.state.applicationIdLabel}:{ele.applicationId}</Card.Text></Col>
                                                                            <Col><Card.Text>{this.state.sanctionedByIdLabel}:{ele.sanctionedById}</Card.Text></Col>
                                                                        </Row>
                                                                        <Row style={{marginTop: "10px"}}>
                                                                            <Col><Card.Text> {this.state.amountLabel}:{ele.amount}</Card.Text></Col>
                                                                            <Col><Card.Text>{this.state.dateLabel}:{new Date(ele.date).toDateString()}</Card.Text></Col>
                                                                        </Row>
                                                                    </Card.Text>}
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                        <Col sm={1}>
                                                            <svg onClick={() => {
                                                                let newArr = [...this.state.expanded]
                                                                let index = this.state.data.indexOf(ele)
                                                                newArr[index] = !newArr[index]
                                                                this.setState({expanded: newArr}, () => {
                                                                    console.log('s', index, this.state)
                                                                })
                                                            }} width="1em" height="1em" viewBox="0 0 16 16"
                                                                 className="bi bi-caret-down-fill" fill="currentColor"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                            </svg>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            )
                                        }
                                    })}</Container>
                                </Row>
                            </div>}
                            {
                                (this.state.length === 0) && (this.state.userExist) &&
                                <Row><Col style={{marginTop: '2%', marginBottom: '1%'}}>{this.state.noresultLable}</Col></Row>
                            }

                            {
                                (!this.state.userExist) &&
                                <div>
                                    <Row><Col style={{marginTop: '2%', marginBottom: '1%'}}>{this.state.nouserLabel}</Col>
                                    </Row>
                                    {/* <div style={{marginTop: '70px'}}>
                                        <Row className="justify-content-md-center">
                                            <br/><br/>
                                            <Col md={6}>
                                                <Link to="/LSGD_FRONT/registercitizen">
                                                    <Button variant="primary" block>Register Citizen</Button>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </div> */}
                                </div>
                            }

                            {
                                (this.state.length != null) && (this.state.userExist) &&
                                <div style={{marginTop: '70px'}}>
                                    <Row className="justify-content-md-center">
                                        <br/><br/>
                                        <Col md={6}>
                                            <Button variant="primary" block
                                                    onClick={() => this.onClickApplyHandler(this.props)}>{this.state.applynewgrantLabel}</Button>
                                        </Col>
                                    </Row>
                                </div>
                            }
                        </Col>


                    </Row>
                </Container>
            </div>
        )
    }

}

//Redux

const mapStateToProps = state => {
    return {
        malayalamLanguage:state.malayalamLanguage
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onMalayalam:()=>dispatch({type:'MALAYALAM'}),
        onEnglish:()=>dispatch({type:'ENGLISH'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListGrant);
