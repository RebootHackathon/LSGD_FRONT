import React,{Component} from 'react';

class MainPage extends Component{
    onClickHandler=()=>{
        // console.log(this.props);
        this.props.history.push('/LSGD_FRONT/listgrants')
    }
    render(){
        return(
            <div>
              Logged in

              <button onClick={this.onClickHandler}>Go</button>
            </div>
        )
    }

}

export default MainPage;