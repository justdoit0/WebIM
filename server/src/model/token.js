import jwt from 'jsonwebtoken';

let token = {
    setToken: (str) => {
        const tokenKey = jwt.sign({ UUID: str }, 'ilovearco', { expiresIn: '1d' });//第二个参数为密匙，根据用户的id生成token
        return tokenKey;
    },
    getToken: (tokenKey) => {
        try {//
            const key = jwt.verify(tokenKey, 'ilovearco');//验证token是否正确
            return key;
        } catch (error) {
            return error;
        }
    }
}

export { token }