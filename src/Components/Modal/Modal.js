import React,{Component} from 'react';
import classes from './Modal.css';

import Spinner from './Spinner';

class Modal extends Component{
    render(){
        let backdrop=null
        if(this.props.show){
            backdrop=<div className={classes.Backdrop}/>
        }
        return(
            <div>
               {backdrop}
                <div className={classes.Modal} 
                        style={{transform:this.props.show?'translateY(0)':'translateY(-100vh)',
                        opacity:this.props.show?'1':'0'}}>
                    <Spinner/>
                </div>
            </div>
        )
    }
}

export default Modal;