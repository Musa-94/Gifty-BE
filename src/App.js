const express = require('express');
const path = require('path');
const Model = require('./Model')

class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use(express.static(path.resolve(__dirname, '../dist')));
        this._model = new Model();

        this._app.get('/getUsers', this.onGetAllUsers);
        this._app.post('/addNewUser', this.onAddUser);
        this._app.post('/checkUser', this.onCheckUser);
    }

    onGetAllUsers = (request, response) => {
        const allUsers = this._model.getAllUsers();

        response.json(allUsers);
        response.end();
    }

    onAddUser = (request, response) => {
        const { body } = request;
        this._model.addUser(body)

        response.end();
    }

    onCheckUser = (request, response) => {
        const { body } = request;
        const check = this._model.isRegisteredUser(body);

        response.json(check);
        response.end();
    }

    getApp = () => {
        return this._app;
    }
}

module.exports = App;
