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
        data:[],
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
        errorMsgLabel:'നിങ്ങൾ ഈ ഗ്രാന്റിനി ആർഹനല്ല..!',
        applyGrantLabel:'പുതിയ ഗ്രാന്റിനി അപേക്ഷിക്കാം',
        descriptionLabel:'ഈ പേജിൽ കേരള സർക്കാർ നൽകുന്ന ഗ്രാന്റുകൾക്ക് അപേക്ഷിക്കാം',
        keralaLabel:'കേരള സർക്കാർ സംരംഭം',
        malayalamLanguage:true,
        appliedGrantDetails:[],
        grantErrorShow:false,
        first:true
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
        const body1 = {"citizenId": +this.props.location.state.aadhar}
        axios.post('/grants/getmygrants', body1)
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
                        // console.log("[etheror]",response.data.data[index]);
                        grantArray.push({"id": id, "grantName": grantName,"grandGroup":response.data.data[index].grant_group});
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
    componentDidMount(){

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
            applyLabel:'Apply',
            errorMsgLabel:'You are not Eligible for this grant..!',
            applyGrantLabel:'Apply Grants',
            descriptionLabel:' This page you can apply for grants given by the government of Kerala',
            keralaLabel:'Kerala Government Initiative'
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
            applyLabel:'അപേക്ഷിക്കാം',
            errorMsgLabel:'നിങ്ങൾ ഈ ഗ്രാന്റിനി ആർഹനല്ല..!',
            applyGrantLabel:'പുതിയ ഗ്രാന്റിനി അപേക്ഷിക്കാം',
            descriptionLabel:'ഈ പേജിൽ കേരള സർക്കാർ നൽകുന്ന ഗ്രാന്റുകൾക്ക് അപേക്ഷിക്കാം',
            keralaLabel:'കേരള സർക്കാർ സംരംഭം'
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
       if(this.state.first){
          
                this.state.data.map((ele) => {
                    let grant_details = this.state.grants.filter(grant => {
                        return grant.id === ele.grantId
                    });
                    // console.log("[filter]","[gd]", grant_details,"[gs]");
                    // let grantDetail={grantName:grant_details[0].grantName,grantGroup:grant_details[0].grantGroup}
                    this.state.appliedGrantDetails=[...this.state.appliedGrantDetails,grant_details];
                    this.state.first=false;
                });
                
        }
        //Check grant group constrints
       
            if(this.state.grant){
                let alreadyAppliedGrantDetais=this.state.appliedGrantDetails.filter(grant=>{
                    // console.log("[Big Problem]",grant[0].id);
                    if(grant[0]){
                        return grant[0].id===this.state.grant
                    }
                })
                console.log("[BigBig Problem]",alreadyAppliedGrantDetais);
                let grantValue=this.state.grants.filter(grant=>{
                    return grant.id===this.state.grant
                })
                console.log("[grant group constrains]",grantValue[0].grandGroup);
                const grantGroupName=grantValue[0].grandGroup;
                if((grantGroupName==="ALL" || !grantGroupName) && !alreadyAppliedGrantDetais.length>0 ){
                    console.log("No problem");
                    this.state.grantErrorShow=false;
                }else{
                    
                    let errorGrantList=this.state.appliedGrantDetails.filter(grant=>{
                        // console.log(grant);
                        if(grant[0]){
                            let gr=grant[0].grandGroup;
                            return gr==grantGroupName
                        }
                        return []
                        
                    })
                    if(errorGrantList.length>0 || alreadyAppliedGrantDetais.length>0){
                        this.state.grantErrorShow=true;
                        console.log("problem",errorGrantList);
                    }else{
                        console.log("No problem");
                        this.state.grantErrorShow=false;
                    }
                }
            }
         
        
       let malayalamLabel="മലയാളം";
       let englishLabel="English";
        return (
            <div style={{width: '100%'}}>
                {/* {console.log("[dfdf]", this.state)} */}
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
