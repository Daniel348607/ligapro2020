const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const app = express();

//npm install socket.io http --save
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Settings
//const URL_ORIGEN = 'http://localhost:4200';
//const URL_DB = 'http://localhost:8089';
const PORT_AUX = 3000;

//Puerto de la BD
app.set('port', process.env.PORT || PORT_AUX);

// Middlewares
//app.use(cors({origin: URL_ORIGEN}));
app.use(cors());
// server.app.use( cors({ origin: true, credentials: true  }) );

app.use(function(req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use(morgan('dev'));
//Maximo tamaño de ficheros que se pasan
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));

// Routes
app.use('/liga/', require('./routes/liga.routes'));

server.listen(8089, function() {
	console.log('Servidor corriendo en http://18.188.46.253:8089');
});

// starting the server
// app.listen(app.get('port'), () => {
//    console.log(`Server on port ${app.get('port')}`);
// });