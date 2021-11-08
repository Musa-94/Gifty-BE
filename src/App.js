const path = require('path');
const express = require('express');

const Model = require('./Model');
const Controller = require('./Controller');
const Nodemailer = require('./libs/sendMail/sendMail');
const FileSystem = require('./libs/fileSystem/fileSystem');
const fetch = require('node-fetch');

class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use(express.static(path.resolve(__dirname, '../dist')));

        this._model = new Model();
        this._controller = new Controller(this._model);
        this._fs = new FileSystem();
        this._mailer = new Nodemailer();

        this._app.use(this.headerCors);

        this._app.get('/getUsers', this.onGetAllUsers);
        this._app.get('/getQuestions', this.onGetQuestions);
        this._app.get('/admin/sendQuestionsToMail', this.sendQuestionsToMail);

        this._app.post('/getHistoryScore', this.onGetHistoryScore);
        this._app.post('/checkAdminCredentials', this.onCheckAdminCredentials);
        this._app.post('/checkUser', this.onCheckUser);
        this._app.post('/addNewUser', this.onAddUser);
        this._app.post('/getTwelveQuestions', this.onGetTwelveQuestions);
        this._app.post('/admin/addNewQuestion', this.addNewQuestion);
        this._app.put('/updateHistoryScore', this.updateHistoryScore);

        this._app.post('/convert', this.handleConvert)
    }

    headerCors = (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        next();
    }

    onCheckAdminCredentials = (req, res) => {
        const { body } = req;

        const isValidAdminCredentials = this._model.checkValidAdminCredential(body);
        console.log('isValidAdminCredentials:', isValidAdminCredentials);

        if (isValidAdminCredentials) {
            res.redirect('/#/admin');
        }

        res.end();
    };

    updateHistoryScore = (requset, response) => {
        const { body } = requset;

        this._model.updateHistoryScore(body);
    };

    onGetAllUsers = (request, response) => {
        const allUsers = this._model.getAllUsers();

        response.json(allUsers);
        response.end();
    };

    onGetQuestions = (request, response) => {
        const questions = require(path.resolve(__dirname, '../dataJson/questions.json'));

        response.json(questions);
        response.end();
    };

    onGetHistoryScore = (request, response) => {
        const { body: phoneNumber } = request;

        const historyScore = this._model.getUserHistoryScore(phoneNumber);
        console.log('historyScore', historyScore);

        response.json(historyScore);
        response.end();
    }

    onGetTwelveQuestions = (request, response) => {
        const questions = require(path.resolve(__dirname, '../dataJson/questions.json'));
        const { body } = request;

        const idUserUsedQuestions = this._model.getUserUsedQuestions(body);

        const unusedQuestions = this._controller.getUnusedQuestion(questions, idUserUsedQuestions)
        const twelveQuestion = this._controller.getTwelveQuestions(unusedQuestions);
        const updateIdUserUsedQuestions = this._controller.saveUserQuestionsId(twelveQuestion, idUserUsedQuestions);
        this._model.updateIdUserUsedQuestions(body, updateIdUserUsedQuestions);

        response.json(twelveQuestion);
        response.end();
    };

    sendQuestionsToMail = (request, response) => {
        const questions = require('../dataJson/questions.json');

        const mailOptions = {
            from: 'gifty.team@mail.ru',
            to: ['farida.osm@gmail.com', 'mc.zakvak@gmail.com', 'farkhad.jafarov96@gmail.com'],
            subject: 'GIFT GAME',
            text: JSON.stringify(questions),
        };

        this._mailer.sendMail(mailOptions);

        response.end();
    };

    onAddUser = (request, response) => {
        const { body } = request;
        const isAddedNewUser = this._model.addUser(body); //переместить логику в контроллер

        response.json(isAddedNewUser);
        response.end();
    };

    onCheckUser = (request, response) => {
        const { body } = request;
        const check = this._model.isRegisteredUser(body);
        console.log(`IS REGISTERED USER:${body.phoneNumber}`, check);

        response.json(check);
        response.end();
    };

    addNewQuestion = async (request, response) => {
        const { body } = request;

        try {
            const normalizeQuestions = await this._fs.readCurrentQuestions(body);

            const isCreateFile = this._fs.createFile(normalizeQuestions);

            response.json(isCreateFile);
        } catch (e) {
            console.log('Error:', e);
        }

        response.end();
    };

    handleConvert = async (req, res) => {
        const { body } = req;

        console.log('**********handleConvert**********************', body)

        try {
            const response = await fetch('https://api.letsexchange.io/api/v1/info?float=true', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ to: 'USDT', from: 'BTC', amount: '3', promocode: '' })
            })

            console.log('*************response**************', JSON.parse(response))

            res.status(200).json(response)
        } catch (e) {
            console.log('EERRRORRRR', e)
        }

    }

    getApp = () => this._app;
}

module.exports = App;
