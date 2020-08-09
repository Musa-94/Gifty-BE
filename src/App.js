const path = require('path');
const express = require('express');

const Model = require('./Model');
const fileSystem = require('./libs/fileSystem/fileSytem');

class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use(express.static(path.resolve(__dirname, '../dist')));
        this._model = new Model();
        this._fs = new fileSystem();

        this._app.get('/getUsers', this.onGetAllUsers);
        this._app.get('/admin', this.onGetAdminPanel);
        this._app.post('/addNewUser', this.onAddUser);
        this._app.post('/checkUser', this.onCheckUser);
        this._app.post('/admin/addNewAnswer', this.addNewAnswer);
    }

    onGetAllUsers = (request, response) => {
        const allUsers = this._model.getAllUsers();

        response.json(allUsers);
        response.end();
    };

    onGetAdminPanel = (request, response) => {
        this._app.use(express.static(path.resolve(__dirname, '../dist/admin')));

        response.end();
    };

    onAddUser = (request, response) => {
        const { body } = request;
        const isAddedNewUser = this._model.addUser(body);

        response.json(isAddedNewUser);
        response.end();
    };

    onCheckUser = (request, response) => {
        const { body } = request;
        const check = this._model.isRegisteredUser(body);

        response.json(check);
        response.end();
    };

    addNewAnswer = async (request, response) => {
        const { body } = request;

        const normalizeAnswer = await this._fs.readCurrentAnswers(JSON.stringify(body));

        const isCreateFile = this._fs.createFile(normalizeAnswer);

        response.json(isCreateFile);
        response.end();
    };

    getApp = () => this._app;
}

module.exports = App;
