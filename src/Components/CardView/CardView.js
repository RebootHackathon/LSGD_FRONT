import React from 'react';
import classes from './CardView.css';
const CardView =(props)=>{
    console.log(props.data);
    
    return (
       
        <div className={classes.card} onClick={props.clicked}>
            <p>Grant Name : {props.data.grantId}</p> <p> Grant Date : Date </p>
            <p>Grant : Amount </p> <p> Grant Status: status</p>
            
        </div>
    )
}

export default CardView;


