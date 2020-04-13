const mysql = require('mysql');

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Nocnoc02',
//     database: 'ligadb'
// });

// db.connect((err) => {
//     if(err){
//         throw err;
//     }
//     console.log('Conexión a la Base OK!!!')
// });

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Nocnoc02', 
    database: 'ligadb'
});

var db = (function () {
    
    function _query(query, params, callback) {
        pool.getConnection(function (err, connection) {
            if (err) {
                connection.release();
                return callback(null, err);
                throw err;
            }
            connection.release();
            connection.query(query, params, function (err, rows) {
                if (!err) {
                    return callback(rows);
                }
                else {
                    connection.release();
                    return callback(null, err);
                    throw err;
                }

            });

            connection.on('error', function (err) {
                connection.release();
                return callback(null, err);
            });
        });
    };

    return {
        query: _query
    };
})();

module.exports = db;
