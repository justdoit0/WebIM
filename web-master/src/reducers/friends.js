const initState = {
    friend:[]
}
const friends = (state = initState,action) =>{
    switch(action.type){
        case 'set_friend':
            return{
                friend:action.friends
            }
        default:
            return state;
    }
}

export default friends