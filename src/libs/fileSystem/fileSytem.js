const fs = require('fs');
const path = require('path');

class fileSystem {

    createFile = normalizeAnswer => {
        fs.writeFile(path.resolve(__dirname, '../../../dataJson/questions.json'), normalizeAnswer,function (err) {
            if(err) {
                return false;
            }

            console.log('NEW QUESTION ADDED');
        });

        return true;
    };

    answersNormalize = newAnswer => {
        let normalizeAnswer = '';

        for (let letterIndex = 0; letterIndex < newAnswer.length; letterIndex++) {
            if (newAnswer[letterIndex] === `}` || newAnswer[letterIndex - 1] === `{` || newAnswer[letterIndex - 1] === '[' || newAnswer[letterIndex - 1] === ',') {
                normalizeAnswer += `\n\t`;
            }

            if ( newAnswer[letterIndex - 1] === `{` || (newAnswer[letterIndex - 1] === ',' && newAnswer[letterIndex - 2] === '"')) {
                normalizeAnswer += `\t\t`;
            }

            normalizeAnswer += newAnswer[letterIndex];
        }
        normalizeAnswer += '\n]';

        return normalizeAnswer;
    };

    readCurrentAnswers = newAnswer => {
        this.newAnswer = newAnswer;
        const answers = require('../../../dataJson/questions.json');
        const stringifyAnswer = JSON.stringify(answers);
        const isEmpty = stringifyAnswer === '[]';
        const currentAnswersWithoutCloseArray = stringifyAnswer.slice(0, stringifyAnswer.length - 1);

        const concatAnswers = this.concatCurrentAndNewAnswers(currentAnswersWithoutCloseArray, this.newAnswer, isEmpty);

        return this.answersNormalize(concatAnswers)
    };

    concatCurrentAndNewAnswers = (currentAnswers, newAnswer, isEmpty) => isEmpty ? `${currentAnswers}${newAnswer}` : `${currentAnswers},${newAnswer}`;
}

module.exports = fileSystem;
