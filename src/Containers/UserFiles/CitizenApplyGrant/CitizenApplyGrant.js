import React, {Component} from 'react';
import AppBar from '../../../Components/CitizenAppBar/AppBar';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import ApplyGrantForm from './CitizenApplyGrantForm';
import axios from '../../../axios';
import { connect } from 'react-redux';

class ApplyGrant extends Component {
    state = {
        details: null,
        grants: [],
        spinning: false,
        grant: undefined,
        grantDataRecieved:false,
        enterDetailsLabel:'വിവരങ്ങൾ പൂരിപ്പിക്കുക',
        aadharLabel:'ആധാർ നമ്പർ',
        nameLabel:'പേര്',
        grantNameLabel:'ഗ്രാന്റിന്റെ പേര്',
        amountLabel:'രൂപ',
        choosefileLabel:'ഫയൽ തിരഞ്ഞെടുക്കുക',
        notChoosefileLabel:'ഫയൽ തിരഞ്ഞെടുത്തില്ല',
        uploadingLabel:'അയച്ചുകൊണ്ടിരിക്കുന്നു',
        uploadLabel:'അയച്ചു',
        applyLabel:'അപേക്ഷിക്കാം',
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
        
        let name = '';
        const body = {"aadhar": +this.props.location.state.aadhar}
        axios.post('/users/getcitizeninfo', body)
            .then(response => {
                console.log('[status]', response);
                if (response.data.status === 200) {
                    name = response.data.data.name;
                    console.log(name);
                    this.setState({...this.props.location.state, name: name})
                }
            })
            .catch(err => {
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
                    // this.state.grant = grantArray[0].id
                    this.setState({grant:grantArray[0].id,grants: [...grantArray]})
                    console.log('[getgrantsget]',this.state);
                    this.setState({grantDataRecieved:true});
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    onInputChangeHandler = (event) => {
        const event_name = event.target.id;
        this.setState({[event_name]: event.target.value})
        console.log("[applygrant]", this.state);

    }
    onClickHandler = (event) => {
        event.preventDefault();
        this.setState({spinning: true});
        // console.log("hasidj");
        const body = {
            "applicationId": Date.now(),
            "citizenId": +this.state.aadhar,
            "grantId": this.state.grant,
            "amount": +this.state.amount,
            "status": "Pending",
            // "sanctionedById": +this.state.applied_by
        }
        axios.post('/grants/sanction', body)
            .then(response => {
                console.log(response);
                this.setState({spinning: false});
                alert("Grant Applied Successfully")
                this.props.history.goBack()
            })
            .catch(err => {
                this.setState({spinning: false});
                alert("Error Occured!")
                console.log(err);
            })

    }
    changeEnglishHandler(this_local){
        this.props.onEnglish();
        this_local.setState({
            malayalamLanguage:false,
            enterDetailsLabel:'Enter Details',
            aadharLabel:'Aadhar Number',
            nameLabel:'Name',
            grantNameLabel:'Grant Name',
            amountLabel:'Amount',
            choosefileLabel:'Choose File',
            notChoosefileLabel:'File not choosen',
            uploadingLabel:'Uploading...',
            uploadLabel:'Uploading Success',
            applyLabel:'Apply'
    })
    }
    changeMalayalamHandler(this_local){
        this.props.onMalayalam();
        this_local.setState({
            malayalamLanguage:true,
            enterDetailsLabel:'വിവരങ്ങൾ പൂരിപ്പിക്കുക',
            aadharLabel:'ആധാർ നമ്പർ',
            nameLabel:'പേര്',
            grantNameLabel:'ഗ്രാന്റിന്റെ പേര്',
            amountLabel:'രൂപ',
            choosefileLabel:'ഫയൽ തിരഞ്ഞെടുക്കുക',
            notChoosefileLabel:'ഫയൽ തിരഞ്ഞെടുത്തില്ല',
            uploadingLabel:'അയച്ചുകൊണ്ടിരിക്കുന്നു...',
            uploadLabel:'അയച്ചു',
            applyLabel:'അപേക്ഷിക്കാം'
        })
    }

    render() {
        let applyLabel = this.state.applyLabel;
        if (this.state.spinning) {
            applyLabel = <Spinner animation="border"/>;
        }
        let form=null;
        if (this.state.grantDataRecieved) {
            console.log("[grant vanne]",this.state.grants);
         form=   <ApplyGrantForm state={this.state} grantlist={this.state.grants} applyLabel={applyLabel} onInputChange={this.onInputChangeHandler}
            onClickHandler={this.onClickHandler}/>
       }
       let malayalamLabel="മലയാളം";
       let englishLabel="English";
        return (
            <div style={{width: '100%'}}>
                {console.log("[dfdf]", this.state)}
                <Container fluid>
                    <Row>
                        <AppBar/>
                        <div style={{marginLeft:"60%", textAlign: 'left',cursor:"pointer"}} onClick={()=>this.changeEnglishHandler(this)}>
                                        {englishLabel}</div>
                                    <div style={{marginLeft:"15px", textAlign: 'left',cursor:"pointer"}} onClick={()=>this.changeMalayalamHandler(this)}>
                                        {malayalamLabel}</div>
                    </Row>
                   {form}
                   
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

export default connect(mapStateToProps, mapDispatchToProps)(ApplyGrant); 
