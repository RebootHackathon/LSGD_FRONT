const initialState={
    name:null,
    isLoggedIn:false
}

const rootReducer=(state=initialState,action)=>{
    if(action.type==='LOGIN'){
        return{
            name:action.name,
            isLoggedIn:true
        };
    }
    if(action.type==='LOGOUT'){
        return{
            name:null,
            isLoggedIn:false
        }
    }
    return state;
};

export default rootReducer;