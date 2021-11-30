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
            userId:user.username,
            pwd:user.password
        }
        const me = {
            id: user.username,
            avatar: '//game.gtimg.cn/images/lol/act/a20201103lmpwjl/icon-ht.png',
            nickname: user.username,
            desc: '个人简介',
        }
        //http://101.34.221.238:8080/login
        return axios.post("http://localhost:3030/login",userPo).then(
            res =>{
            const data = res.data;
            if(data.code==1){
                const err = {
                    msg:data.msg
                }
                throw  err;
            }
             localStorage.setItem("user",user)
            // setAuthorizationToken(token)
            dispatch(setCurrentInfo(me))
        })
    }
}