import React, {Component} from 'react';
// import AppBar from "../../../Components/CitizenAppBar/AppBar";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import RegisterNewCitizenForm from './CitizenSignUpForm';
import axios from '../../../axios';
import { connect } from 'react-redux';
import Navbar from "react-bootstrap/Navbar";

class RegisterNewCitizen extends Component {
    state = {
        aadhar: '',
        name: null,
        dob: null,
        address: null,
        income: null,
        cast: null,
        religion: null,
        job: null,
        father_name: null,
        mother_name: null,
        password: null,
        spinning: false,
        verifiedText: 'Get OTP First',
        verified: false,
        enterDetailsLabel:'വിവരങ്ങൾ പൂരിപ്പിക്കുക',
        aadharLabel:'ആധാർ നമ്പർ',
        nameLabel:'പേര്',
        getOtpLabel:'ഒ.ടി.പി',
        addressLabel:'വിലാസം',
        enterOtpLabel:'ഒ.ടി.പി അടിക്കുക',
        goLabel:'മുന്നോട്ട്',
        dobLabel:'ജനനം',
        incomeLabel:'വരുമാനം',
        religionLabel:'മതം',
        castLabel:'ജാതി',
        jobLabel:'തൊഴിൽ',
        fatherLabel:'പിതാവിന്റെ പേര്',
        motherLabel:'മാതാവിന്റെ പേര്',
        passwordLabel:'പാസ്‌വേഡ്',
        getOtpfirstLabel:'ആദ്യം ഒ.ടി.പി വാങ്ങുക',
        registrationLabel:'രജിസ്ട്രേഷൻ',
        malayalamLanguage:true
    }

    componentWillMount() {
        if(this.props.malayalamLanguage){
            console.log("malayalam vannu");
            this.changeMalayalamHandler(this);
        }else{
            console.log("english vannu");
            this.changeEnglishHandler(this);
        }
        console.log("[malayalamcheck]",this.state);
        
    }
    onInputChangeHandler = (event) => {
        const event_name = event.target.id;
        this.setState({[event_name]: event.target.value})
        console.log(event_name,event.target.value)

    }

    setstate = (data) =>{
        console.log('set sttate')
        this.setState(data)
    }
    onClickHandler = (event) => {
        event.preventDefault();
        this.setState({spinning: true});
        const body = {
            "aadhar": +this.state.aadhar,
            "name": this.state.name,
            "dob": this.state.dob,
            "address": this.state.address,
            "income": this.state.income,
            "cast": this.state.cast,
            "religion": this.state.religion,
            "job": this.state.job,
            "fathername": this.state.father_name,
            "mothername": this.state.mother_name,
            headingLabel:'പൗരൻമ്മാർക്കുള്ള സൈൻ അപ്പ്',
            password: this.state.password
        }
        axios.post('/users/newcitizen', body)
            .then(response => {
                console.log(response);
                this.setState({spinning: false});
                if (response.data.status === 200) {
                    alert("Registration Succes")
                    this.props.history.goBack()
                } else {
                    alert("Registration Failed")
                }
   

            })
            .catch(err => {
                console.log(err);
                this.setState({spinning: false});
            })
    }

    changeEnglishHandler(this_local){
        this.props.onEnglish();
        this_local.setState({
            malayalamLanguage:false,
            enterDetailsLabel:'Enter Details',
            aadharLabel:'Aadhar Number',
            nameLabel:'Name',
            getOtpLabel:'GET OTP',
            addressLabel:'Address',
            enterOtpLabel:'Enter OTP',
            goLabel:'GO',
            dobLabel:'Dob',
            incomeLabel:'Income',
            religionLabel:'Religion',
            castLabel:'Cast',
            jobLabel:'Job',
            fatherLabel:'Father Name',
            motherLabel:'Mother Name',
            passwordLabel:'Password',
            getOtpfirstLabel:'Get OTP frist',
            registrationLabel:'Register',
            headingLabel:'Citizen SignUp'
    })
    }
    changeMalayalamHandler(this_local){
        this.props.onMalayalam();
        this_local.setState({
            malayalamLanguage:true,
            enterDetailsLabel:'വിവരങ്ങൾ പൂരിപ്പിക്കുക',
            aadharLabel:'ആധാർ നമ്പർ',
            nameLabel:'പേര്',
            getOtpLabel:'ഒ.ടി.പി',
            addressLabel:'വിലാസം',
            enterOtpLabel:'ഒ.ടി.പി അടിക്കുക',
            goLabel:'മുന്നോട്ട്',
            dobLabel:'ജനനം',
            incomeLabel:'വരുമാനം',
            religionLabel:'മതം',
            castLabel:'ജാതി',
            jobLabel:'തൊഴിൽ',
            fatherLabel:'പിതാവിന്റെ പേര്',
            motherLabel:'മാതാവിന്റെ പേര്',
            passwordLabel:'പാസ്‌വേഡ്',
            getOtpfirstLabel:'ആദ്യം ഒ.ടി.പി വാങ്ങുക',
            registrationLabel:'രജിസ്ട്രേഷൻ',
            headingLabel:'പൗരൻമ്മാർക്കുള്ള സൈൻ അപ്പ്'
        })
    }

    render() {
        let registerLabel = this.state.registrationLabel;
        if (this.state.spinning) {
            registerLabel = <Spinner animation="border"/>;
        }
        let malayalamLabel="മലയാളം";
       let englishLabel="English";
        return (
            <div style={{width: '100%'}}>

                <Container fluid>
                    <Row>
                        {/* <AppBar/> */}
                        <div style={{position:' relative'}}>
                            <Navbar bg="light" variant="light">
                                <Navbar.Brand href="/citizenlogin">
                                    <img
                                        alt=""
                                        src={require('../../../assets/icons/register.png')}
                                        width="30"
                                        height="30"
                                        style={{marginRight: '10px'}}
                                        className="d-inline-block align-top"
                                    />{' '}
                                    {this.state.headingLabel}

                                 

                                </Navbar.Brand>
                                </Navbar></div>
                        <div style={{marginLeft:"60%", textAlign: 'left',cursor:"pointer"}} onClick={()=>this.changeEnglishHandler(this)}>
                                        {englishLabel}</div>
                                    <div style={{marginLeft:"15px", textAlign: 'left',cursor:"pointer"}} onClick={()=>this.changeMalayalamHandler(this)}>
                                        {malayalamLabel}</div>
                    </Row>
                    <RegisterNewCitizenForm
                        setstate = {this.setstate}
                        state={this.state} registerLabel={registerLabel} onInputChange={this.onInputChangeHandler}
                                            onClickHandler={this.onClickHandler}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterNewCitizen);
