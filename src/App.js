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
        this._app.get('/getQuestions', this.onGetQuestions);
        this._app.get('/admin', this.onGetAdminPanel);
        this._app.post('/addNewUser', this.onAddUser);
        this._app.post('/checkUser', this.onCheckUser);
        this._app.post('/admin/addNewQuestion', this.addNewQuestion);
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

    onGetQuestions = (request, response) => {
        const questions = require('../dataJson/questions.json');

        response.json(questions);
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

    addNewQuestion = async (request, response) => {
        const { body } = request;

        const normalizeQuestions = await this._fs.readCurrentQuestions(JSON.stringify(body));

        const isCreateFile = this._fs.createFile(normalizeQuestions);

        response.json(isCreateFile);
        response.end();
    };

    getApp = () => this._app;
}

module.exports = App;
