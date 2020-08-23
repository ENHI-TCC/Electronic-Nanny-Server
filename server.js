const mariadb = require('mariadb');
const express = require('express');
const bodyParser = require('body-parser');

// --------------------------------------------------------------
// Connection Mariadb
let con = mariadb.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "baba_eletronica",
});

con.connect((err) => {
    if (err) {
        throw err;
    } else {
        setTimeout(() => { console.log("Waiting 2sec"), 2000 });
        console.log('We are connected with DataBase');
    }
});
// --------------------------------------------------------------
// Express configure
const app = express();
app.use(bodyParser.json());
app.use(express.static('.'));
app.listen(8080, () => {
    setTimeout(() => { console.log("Waiting 2sec"), 2000 });
    console.log('Listening on port 8080');
});
// --------------------------------------------------------------
// Get cry report

app.get('/ServerRequest/CryReport', function (req, res) {
    let sql = `SELECT * FROM monitoramento_choro`;

    con.query(sql, function (err, result, fields) {
        if (err) {
            throw err;
        }
        console.log(result);
        return res.json(result);
    });
});