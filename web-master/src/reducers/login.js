const initState = {
    user:{}
}
const login = (state = initState,action) =>{
    switch(action.type){
        case 'CURRENT_USER':
            return{
                user:action.user
            }
        default:
            return state;
    }
}

export default login