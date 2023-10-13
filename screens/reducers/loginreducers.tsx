const initState = {
    id: 'admin',
    password : '1234',
    login: false
}

//reducer

export default function LoginReducers(state = initState, action : any){
    switch (action.type){
        case 'CreateID' :
            return {...state, login: true};
        default : 
            return state;
    }
    
}