const initialState={
    name:null,
    isLoggedIn:false,
    malayalamLanguage:true
}

const rootReducer=(state=initialState,action)=>{
    if(action.type==='LOGIN'){
        return{...state,
            name:action.name,
            isLoggedIn:true
        };
    }
    if(action.type==='LOGOUT'){
        return{...state,
            name:null,
            isLoggedIn:false
        }
    }
    if(action.type==='MALAYALAM'){
        return{
            ...state,
            malayalamLanguage:true
        }
    }
    if(action.type==='ENGLISH'){
        return{
            ...state,
            malayalamLanguage:false
        }
    }
    return state;
};

export default rootReducer;