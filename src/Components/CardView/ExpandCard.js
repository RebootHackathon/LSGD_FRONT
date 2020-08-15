import React,{Component} from 'react';

class ExpandCard extends Component{
    goBack(props){
        console.log(props,"lookit");
        this.props.history.replace(  {pathname:'/LSGD_FRONT/listgrants', state: { setstate:this.props.location.state.setstate}});
      
        // this.props.history.goBack();
    }
    
    render(){
    //    console.log(this.props); 
    return (
        <div>
            <button onClick={()=>this.goBack(this.props)}>back</button>
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


