
const express = require('express');
const bodyParser = require('body-parser');

require('./database-setup.js');

let app = express();

console.log('process id', process.pid);
// process.exit();
// console.log( 'ENVIRONMENT VARIABLES', process.env );
console.log( 'Database location', process.env.MY_DB_LOCATION );

console.log('Where am I?', __dirname);
app.use(express.static(__dirname + '/../client'));

app.use(bodyParser.json());
app.use(require('./middleware/log-stuff.middleware.js'));
app.use(require('./middleware/auth.middleware.js'));

app.get('/', function showHomePage(request, response, next) {
    console.log(request.url);

    response.status(200);
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Hello World</h1>');
});

app.use( '/food', require('./routes/food.routes.js') );

app.use( require('./middleware/error-handler.middleware.js') );

app.listen(3000, function doSomethingOnceServerIsUp() {
    console.log('The server is now up!');
});
