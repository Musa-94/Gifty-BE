const fs = require('fs');
const path = require('path');

class fileSystem {
    createFile = questions => {
        try {
            fs.writeFile(path.resolve(__dirname, '../../../dataJson/questions.json'), questions,function (err) {
                if(err) {
                    return console.log('ERROR', err);
                }

                console.log('NEW QUESTIONS ADDED');
            });

            return true;
        } catch (err) {
            console.log('ERROR', err);
        }
    };


    readCurrentQuestions = newQuestion => {
        const currentQuestions = require(path.resolve(__dirname,'../../../dataJson/questions.json'));
        const { questions } = newQuestion;

        const prevQuestions = JSON.stringify(currentQuestions);
        const nextQuestions = JSON.stringify(questions);
        const a = prevQuestions.slice(0, prevQuestions.length - 1);
        const b = nextQuestions.slice(1, nextQuestions.length);

        return prevQuestions === '[]' ? `${a}${b}` : `${a},${b}`;
    };
}

module.exports = fileSystem;
