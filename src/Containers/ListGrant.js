import React,{Component} from 'react';

import SearchForm from '../Components/SearchForm/SearchForm';
import axios from '../axios';
import CardView from '../Components/CardView/CardView';
import ExpandCard from '../Components/CardView/ExpandCard';
import {Redirect} from 'react-router-dom';

class ListGrant extends Component{

    state={
        aadhar:null,
        length:0,
        data:null
    };
    
    onCardClickHandler=(id)=>{
        console.log(this.state.data);
        
        const expand_element=this.state.data.filter(ele=>(
            ele._id===id
        ))
        console.log(expand_element);
        this.props.history.push(  {pathname:'/LSGD_FRONT/'+id, state: { detail: expand_element }});
        // return <Redirect to={"/login"} render={(props) => <ExpandCard expandData={this.state.data[id]}/>}/>
    }
    showListHandler=()=>{
        const data=this.state.data;   
        return  data.map((ele)=>(
            // console.log(ele,"kaka")
                    <CardView key={ele._id} id={ele._id} data={ele} clicked={()=>this.onCardClickHandler(ele._id)}/>
         ) );
        // console.log(this.state);
    }
    onChangeHandler=(event)=>{
        this.setState({aadhar:event.target.value})
    }
    onClickHandler=(event)=>{
        event.preventDefault();
        console.log(this.state.aadhar);
        const body={"citizenId":+this.state.aadhar}
        axios.post('/grants/getGrantsOfSpecificCitizen',body)
            .then(response=>{
                console.log(response);
                if(response.data.data.length>0){
                    console.log(response.data.data.length);
                    this.setState({data:response.data.data,length:response.data.data.length});
                     this.showListHandler(response.data.data);
                }else{
                    this.setState({
                       
                        length:0,
                        data:null
                    })
                }
            })
            .catch(err=>{
                console.log(err);
            })
    }
    render(){
        let view=null;
        if(this.state.length>0){
            view=this.showListHandler();
        }
        else{
            view=null;
        }
       
        return(
            <div>
                <SearchForm onInputChange={this.onChangeHandler} clicked={this.onClickHandler}/>
                {view}
                {console.log(view)}
            </div>
        )
    }

}

export default ListGrant;