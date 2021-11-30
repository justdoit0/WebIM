import {
    conn
} from '../db/config.js';

let project = {
    getProjects: (UUID, callback) => {
        let sql = `select * from project where UUID = '${UUID}';`;

        conn.query(sql, (err, res) => {
            if (err) {
                console.log(err);
                let resault = {
                    code: 1,
                    error: err,
                    msg: 'error'
                };

                callback(resault);
            } else {
                for (let i = 0; i < res.length; i++) {
                    res[i].isChackMore = false;
                    res[i].update_time = res[i].update_time.toISOString().replace(/T/, ' ').replace(/\..+/, '');
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

    addProject: (UUID, create_time, project_id, data, callback) => {
        data = JSON.stringify(data);
        console.log(data)
        let sql = `insert into project(create_time, update_time, data, UUID, project_id) values ('${create_time}', '${create_time}', '${data}', '${UUID}', '${project_id}');`;

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

    updataProject: (UUID, project_id, update_time, data, callback) => {
        data = JSON.stringify(data);
        let sql = `update project set update_time='${update_time}', data='${data}' where project_id='${project_id}' and UUID='${UUID}';`;

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

    dropProject: (UUID, project_id, callback) => {
        let sql = `delete from project where project_id='${project_id}' and UUID='${UUID}';`;

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

export {
    project
}