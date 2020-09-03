class Controller {
    constructor(model) {
        this._model = model;
    }

    getUnusedQuestion = (question, userUsedQuestionsId) => question.filter(questions => !userUsedQuestionsId.includes(questions.qid));

    indexStartRandom = questionsLength => Math.floor(Math.random() * questionsLength);

    questionsSortRandomize = question => {
        for (let index = question.length - 1; index > 0; index--) {
            let indexRandom = Math.floor(Math.random() * (index));

            [question[index], question[indexRandom]] = [question[indexRandom], question[index]]
        }

        return question;
    };

    getTwelveQuestions = questions => {
        const questionsRandomize = this.questionsSortRandomize(questions)
        const questionsQuantity = questionsRandomize.length;
        const indexStart = this.indexStartRandom(questionsQuantity);
        const indexEnd = indexStart + 12;
        const twelveQuestions = questionsRandomize.slice(indexStart, indexEnd);

        return twelveQuestions.length < 12 ? questionsRandomize.slice(indexEnd, indexEnd + (12 - twelveQuestions.length)) : twelveQuestions;
    };

    saveUserQuestionsId = (saveQuestions, idUsedQuestions) => {
        saveQuestions.forEach(question => idUsedQuestions.push(question.qid))

        return idUsedQuestions
    };
}

module.exports = Controller;
