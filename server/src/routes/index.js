import express from 'express'
import {token} from '../model/token.js';
import {user} from '../model/user.js';
import {project} from '../model/project.js';
import {page} from '../model/page.js';
import {contact} from '../model/contact.js';

import md5 from 'md5';//密码加密
import moment from 'moment';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.post('/friends/list',(req,res)=>{
    let data  = req.body;
    //console.log(data)
    // data.forEach(element => {
    //     console.log(element)
    // });
    contact.find(data.userId,resault=>{
        try{
            if(!resault){
                res.send({
                    code:1,
                    msg:'好友为空',
                    
                })
            }else{
                res.send({
                    code:0,
                    msg:'查找成功',
                    list:resault
                })
            }
        }catch(err){
            res.send({
                code:2,
                msg:'服务器出错'
            })
        }
    })
})

app.post('/friends/addFriends',(req,res)=>{
    let data = req.body
    let currenttime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    contact.insert(data.userId1,data.userId2,currenttime,resualt=>{
        try{ 
                res.send({
                    code:0,
                    msg:'查找成功',
                    list:resualt
                })
        }catch(err){
            res.send({
                code:2,
                msg:err
            })
        }
    })
})

app.post('/login', (req, res) => {
    let data = req.body;

    user.select(data.userId, resault => {
        try {
            if (resault[0].pwd === md5(`cent${data.pwd}OS`)) {
                res.send({
                    code: 0,
                    token: token.setToken(resault[0].UUID),
                    msg: '登录成功',
                    list:resault
                })
            } else {
                res.send({
                    code: 1,
                    msg: '登录失败',
                    resault: {
                        login: false,
                        error: '用户名或密码错误'
                    }
                })
            }
        } catch (error) {
            res.send({
                code: 1,
                msg: '登录失败',
                resault: {
                    login: false,
                    error: '查无此人'
                }
            })
        }
    })
})


app.post('/register', (req, res) => {
    let data = req.body;
    let currenttime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    user.insert(data.userId, md5(`cent${data.pwd}OS`), currenttime, (error, resault) => {
        if (error) {
            res.send({
                code: 1,
                msg: '注册失败，用户名重复'
            })
        } else {
            res.send({
                code: 0,
                username: data.username,
                msg: '注册成功'
            })
        }
    })
})

app.post('/project', (req, res) => {
    let reqdata = req.body;
    try {
        let token_key = token.getToken(reqdata.token);
        let time_now = new Date().getTime()

        if (token_key.exp * 1000 >= time_now) {
            switch (reqdata.oper) {
                case 'getProjects':
                    project.getProjects(token_key.UUID, resault => {
                        res.send(resault);
                    })
                    break;
                case 'addProject':
                    let create_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
                    let project_id = 'j' + new Date().getTime();

                    project.addProject(token_key.UUID, create_time, project_id, reqdata.data, resault => {
                        res.send(resault);
                    })
                    break;
                case 'updateProject':
                    let update_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
                    project.updataProject(token_key.UUID, reqdata.project_id, update_time, reqdata.data, resault => {
                        res.send(resault);
                    })
                    break;
                case 'dropProject':
                    project.dropProject(token_key.UUID, reqdata.project_id, resault => {
                        res.send(resault);
                    })
                    break;
                default:
                    res.send({
                        code: 1,
                        msg: 'error'
                    })
                    break;
            }
        } else {
            res.send({
                code: 1,
                data: 404,
                msg: 'token超时'
            })
        }
    } catch (error) {
        console.log(error)
        res.send({
            code: 1,
            data: 404,
            msg: error
        })
    }
})

app.post('/page', (req, res) => {
    let reqdata = req.body;

    try {
        let token_key = token.getToken(reqdata.token);
        let time_now = new Date().getTime()

        if (token_key.exp * 1000 >= time_now) {
            switch (reqdata.oper) {
                case 'getPages':
                    page.getPages(token_key.UUID, reqdata.project_id, resault => {
                        res.send(resault);
                    })
                    break;
                case 'addPage':
                    let create_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
                    let page_id = 'p' + new Date().getTime();

                    page.addPage(token_key.UUID, reqdata.project_id, create_time, page_id, reqdata.data, resault => {
                        res.send(resault);
                    })
                    break;
                case 'updatePage':
                    let update_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
                    page.updataPage(token_key.UUID, reqdata.page_id, update_time, reqdata.data, resault => {
                        res.send(resault);
                    })
                    break;
                case 'dropPage':
                    page.dropPage(token_key.UUID, reqdata.page_id, resault => {
                        res.send(resault);
                    })
                    break;
                default:
                    res.send({
                        code: 1,
                        msg: 'error'
                    })
                    break;
            }

        } else {
            res.send({
                code: 1,
                data: 404,
                msg: 'token超时'
            })
        }
    } catch (error) {
        console.log(error)
        res.send({
            code: 1,
            data: 404,
            msg: error
        })
    }
})


export {
    app
};