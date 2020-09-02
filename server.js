const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');

// --------------------------------------------------------------
// Connection Mariadb
// let con = mariadb.createConnection({
//     host: "192.168.100.33",
//     user: "root",
//     password: "123",
//     database: "baba_eletronica",
// });

// con.connect(function (err) {
//     if (err) {
//         throw err;
//     } else {
//         setTimeout(() => { console.log("Waiting 2sec"), 2000 });
//         console.log('We are connected with DataBase');
//     }
// });

// con.getConnection();


// pool.getConnection()
//     .then(() => {
//         console.log("conectei");



//     }).catch((err) => {
//         throw err;
//     });

// --------------------------------------------------------------
// Express configure
const app = express();
app.use(bodyParser.json());
app.use(express.static('.'));
// app.use(express.static('/home/pi/Electronic-Nanny-Server'));
app.listen(8080, function () {
    setTimeout(() => { console.log("Waiting 2sec"), 2000 });
    console.log('Listening on port 8080');
});
// --------------------------------------------------------------
// Get cry report

// app.get('/ServerRequest/CryReport', function (req, res) {
//     let sql = `SELECT * FROM monitoramento_choro`;

//     con.query(sql, function (err, result, fields) {
//         if (err) {
//             throw err;
//         }
//         console.log(result);
//         return res.json(result);
//     });
// });

app.get('/ServerRequest/CryReport', async (req, res) => {
    let conn;
    let teste = {};
    try {
        // establish a connection to MariaDB
        conn = await pool.getConnection();

        // create a new query
        var query = `SELECT * FROM monitoramento_choro`;


        // execute the query and set the result to a new variable
        var rows = await conn.query(query);

        res.json(rows);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});

// app.delete('/ServerRequest/DeleteCryById', async (req, res) => {
//     let conn;
//     try {
//         // establish a connection to MariaDB
//         conn = await pool.getConnection();

//         // create a new query
//         var query = 'DELETE FROM `monitoramento_choro` WHERE `id`=?';

//         await conn.query(query, [req.body.id], function (error, results, fields) {
//             if (error) throw error;
//             res.end('Record has been deleted!');
//         });
//         res.send("Deleted");

//         // execute the query and set the result to a new variable
//         // var rows = await conn.query(query);

//         // res.json(rows);
//     } catch (err) {
//         throw err;
//     } finally {
//         if (conn) return conn.release();
//     }
// });
app.post('/ServerRequest/DeleteCryById', async (req, res) => {
    let conn;
    try {
        // establish a connection to MariaDB
        conn = await pool.getConnection();

        // create a new query
        var query = 'DELETE FROM `monitoramento_choro` WHERE `id`=?';

        await conn.query(query, [req.body.id], function (error, results, fields) {
            if (error) throw error;
            res.end('Record has been deleted!');
        });
        res.send("Deleted");

        // execute the query and set the result to a new variable
        // var rows = await conn.query(query);

        // res.json(rows);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.release();
    }
});