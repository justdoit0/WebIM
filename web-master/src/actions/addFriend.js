import axios from "axios"


export const setFriend = (friends) =>{

    return{
        type:'set_friend',
        friends
    }
}



export const getAllFriend = () => {
    return dispatch =>{
        const userPo = {
            userId:'root',
            pwd:'123456'
        }
        return axios.post("http://101.34.221.238:8080/login",userPo).then(
            res =>{
            const data = res.data;
            if(data.code==1){
                const err = {
                    msg:data.msg
                }
                throw  err;
            }
            const list = [
                {
                  id: 1,
                  avatar: '//game.gtimg.cn/images/lol/act/img/champion/Fizz.png',
                  nickname: 'a菲兹',
                  message: '你抓不到我！',
                  date: '02-07',
                },
                {
                  id: 8,
                  avatar: '//game.gtimg.cn/images/lol/act/img/champion/Khazix.png',
                  nickname: 'a卡兹克',
                  message: '❓❓❓',
                  date: '02-07',
                },]
            
                // setAuthorizationToken(token)
           
                dispatch(setFriend(list))
      
                console.log('添加伪代码数据成功 你真牛逼啊')
                
             
        })
    }

      

    }
