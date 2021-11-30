import { conn } from '../db/config.js';

let user = {
    select: (username, callback) => {
        let sql = `select * from user where userId = '${username}';`
        conn.query(sql, (err, res) => {
            if (err) {
                callback(err)
            } else {
                callback(res)
            }
        })
    },

    insert: (username, password, create_time, callback) => {
        //let uuid = 'u' + new Date().getTime();
        let sql = `insert into user(userId, pwd,registerdate) values ('${username}', '${password}','${create_time}')`;
        //let sql='insert into user (username,password) values (admin111,123456)'
        conn.query(sql, (err, res) => {
            callback(err, res);
        })
    }
}

export {user}