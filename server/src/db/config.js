import mysql from 'mysql2';
//import { config } from '../config';

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'webim',
    password: '123456',
    port: '3306'
});

export { conn }