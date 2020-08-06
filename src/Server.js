const http = require('http');
const App = require('./App');

class Server {
    constructor(port) {
        this._port = port;
        this._app = new App();
        this._server = http.createServer(this._app.getApp());
    }

    start = () => this._server.listen(this._port) && console.log('SERVER HAS BEEN STARTED ON PORT', this._port);
}

module.exports = Server;
