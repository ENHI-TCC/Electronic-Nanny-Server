const pool = require('../database/db');
const moment = require('moment');

module.exports = {
    async index(req, res) {
        let conn;
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
    },

    async insertNewCry(req, res) {
        let conn;
        try {
            conn = await pool.getConnection();
            var values = [];

            var mysqlTimestamp = new Date();
            mysqlTimestamp.setHours(mysqlTimestamp.getHours() - 3);

            values.push(mysqlTimestamp);

            var query = "INSERT INTO monitoramento_choro (data)  VALUES ?";

            await conn.query(query, [values], function (error, results, fields) {
                if (error) throw error;
                res.send("Insert complete");
            });
            res.send("Insert complete");

        } catch (err) {
            throw err;
        } finally {
            if (conn) return conn.release();
        }
    },
    async deleteAll(req, res) {
        let conn;
        try {
            // establish a connection to MariaDB
            conn = await pool.getConnection();

            // create a new query
            var query = 'DELETE FROM `monitoramento_choro` ';

            await conn.query(query, function (error, results, fields) {
                if (error) throw error;
                res.send('Delete All Complete!');
            });
            res.send('Delete All Complete!');

        } catch (err) {
            throw err;
        } finally {
            if (conn) return conn.release();
        }

    },

    async deleteById(req, res) {
        let conn;
        try {
            // establish a connection to MariaDB
            conn = await pool.getConnection();

            // create a new query
            var query = 'DELETE FROM `monitoramento_choro` WHERE `id`=?';

            await conn.query(query, [req.body.id], function (error, results, fields) {
                if (error) throw error;
                res.send('Record has been deleted!');
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
    }

}