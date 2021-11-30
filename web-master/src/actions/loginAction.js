import axios from "axios"


export const setCurrentInfo = (user) =>{
    return{
        type:'CURRENT_USER',
        user
    }
}

export const logoutAction = () =>{
    return dispatch => {
        // 删除本地
        localStorage.removeItem("token")
        // redux置空
        dispatch(setCurrentInfo({}))
    }
}


export const loginRequest = (user) => {

    return dispatch =>{
        const userPo = {
            'userId':user.username,
            'pwd':user.password
        }
     
        return axios.post("http://localhost:3000/login",userPo).then(
            res =>{
            let data = res.data;
            if(data.code==1){
                const err = {
                    msg:data.msg
                   
                }
                console.log('错误');
                console.log(data)
                throw  err;
            }
            const list = data.list;
         

            const me = {
                id: list.userId,
                avatar: list.avatar,
                nickname: user.username,
                desc: '没个性，怎签名',
            }
            console.log('me: '+me);

             localStorage.setItem("user",user)
            // setAuthorizationToken(token)
            dispatch(setCurrentInfo(me))
        },


        
        
        )
    }
}