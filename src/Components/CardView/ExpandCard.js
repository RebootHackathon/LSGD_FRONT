import React,{Component} from 'react';

class ExpandCard extends Component{
    
    render(){
    //    console.log(this.props); 
    return (
        <div>
            hai
            <p>{this.props.location.state.detail[0]._id}</p>
            <p>{this.props.location.state.detail[0].amount}</p>
            <p>{this.props.location.state.detail[0].applicationId}</p>
           <p> {this.props.location.state.detail[0].citizenId}</p>
            <p>{this.props.location.state.detail[0].date}</p>
           <p> {this.props.location.state.detail[0].grantId}</p>
          <p> {this.props.location.state.detail[0].status}</p>
           <p> {this.props.location.state.detail[0].sanctionedById}</p>

        </div>
    )
}
}
export default ExpandCard;


