import { conn } from '../db/config.js';

let page = {
    getPages: (UUID, project_id, callback) => {
        let sql = `select * from pages where project_id = '${project_id}' and UUID='${UUID}';`;

        conn.query(sql, (err, res) => {
            if (err) {
                let resault = {
                    code: 1,
                    error: err,
                    msg: 'error'
                };

                callback(resault);
            } else {
                for (let i = 0; i < res.length; i++) {
                    res[i].data = JSON.parse(res[i].data);
                }
                let resault = {
                    code: 0,
                    data: res,
                    msg: '查询成功'
                }
                callback(resault);
            }
        })
    },

    addPage: (UUID, project_id, create_time, page_id, data, callback) => {
        data = JSON.stringify(data);
        let sql = `insert into pages(create_time, update_time, data, project_id, page_id, UUID) values ('${create_time}', '${create_time}', '${data}', '${project_id}', '${page_id}', '${UUID}');`;

        conn.query(sql, (err, res) => {
            if (err) {
                let resault = {
                    code: 1,
                    error: err,
                    msg: 'error'
                };

                callback(resault);
            } else {
                let resault = {
                    code: 0,
                    data: res,
                    msg: '插入成功'
                }
                callback(resault);
            }
        })
    },

    updataPage: (UUID, page_id, update_time, data, callback) => {
        data = JSON.stringify(data);
        let sql = `update pages set update_time='${update_time}', data='${data}' where page_id='${page_id}' and UUID='${UUID}';`;
        console.log(sql)
        conn.query(sql, (err, res) => {
            if (err) {
                let resault = {
                    code: 1,
                    error: err,
                    msg: 'error'
                };

                callback(resault);
            } else {
                let resault = {
                    code: 0,
                    data: res,
                    msg: '更新成功'
                }
                callback(resault);
            }
        })
    },

    dropPage: (UUID, page_id, callback) => {
        let sql = `delete from pages where page_id='${page_id}' and UUID='${UUID}';`;

        conn.query(sql, (err, res) => {
            if (err) {
                let resault = {
                    code: 1,
                    error: err,
                    msg: 'error'
                };

                callback(resault);
            } else {
                let resault = {
                    code: 0,
                    data: res,
                    msg: '删除成功'
                }
                callback(resault);
            }
        })
    }
}

export {page}