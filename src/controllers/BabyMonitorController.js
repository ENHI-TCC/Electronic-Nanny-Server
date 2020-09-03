const pool = require('../database/db');

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

    async deleteById(req, res) {
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
    }

}