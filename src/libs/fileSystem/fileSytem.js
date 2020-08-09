const fs = require('fs');
const path = require('path');

class fileSystem {

    createFile = questions => {
        fs.writeFile(path.resolve(__dirname, '../../../dataJson/questions.json'), questions,function (err) {
            if(err) {
                return false;
            }

            console.log('NEW QUESTION ADDED');
        });

        return true;
    };

    questionNormalize = newQuestion => {
        let normalizeQuestions = '';

        for (let letterIndex = 0; letterIndex < newQuestion.length; letterIndex++) {
            if (newQuestion[letterIndex] === `}` || newQuestion[letterIndex - 1] === `{` || newQuestion[letterIndex - 1] === '[' || newQuestion[letterIndex - 1] === ',') {
                normalizeQuestions += `\n\t`;
            }

            if ( newQuestion[letterIndex - 1] === `{` || (newQuestion[letterIndex - 1] === ',' && newQuestion[letterIndex - 2] === '"')) {
                normalizeQuestions += `\t\t`;
            }

            normalizeQuestions += newQuestion[letterIndex];
        }
        normalizeQuestions += '\n]';

        return normalizeQuestions;
    };

    readCurrentQuestions = newQuestion => {
        this.newQuestion = newQuestion;
        const questions = require('../../../dataJson/questions.json');

        const stringifyQuestion = JSON.stringify(questions);
        const isEmpty = stringifyQuestion === '[]';
        const currentQuestionWithoutCloseArray = stringifyQuestion.slice(0, stringifyQuestion.length - 1);

        const concatQuestion = this.concatCurrentAndNewQuestion(currentQuestionWithoutCloseArray, this.newQuestion, isEmpty);

        return this.questionNormalize(concatQuestion)
    };

    concatCurrentAndNewQuestion = (currentQuestion, newQuestion, isEmpty) => isEmpty ? `${currentQuestion}${newQuestion}` : `${currentQuestion},${newQuestion}`;
}

module.exports = fileSystem;
