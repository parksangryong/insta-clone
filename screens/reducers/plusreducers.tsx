const initState = {
    like: 11,
    msg : 'hello'
}

//reducer

export default function PlusReducers(state = initState, action : any){
    switch (action.type){
        case 'Like&Msg' :
            return {...state, like: state.like+1, msg: action.msg};
        default : 
            return state;
    }
    
}