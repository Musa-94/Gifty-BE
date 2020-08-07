const Server = require('./src/Server');

function init() {
    this.port = process.env.PORT || 2020;

    const server = new Server(this.port);
    server.start();
}

init();
