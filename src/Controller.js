class Controller {
    constructor(model) {
        this._model = model;
    }

    getUnusedQuestion = (question, userUsedQuestionsId) => question.filter(questions => !userUsedQuestionsId.includes(questions.qid));

    randomStartIndex = questionsLength => Math.floor(Math.random() * questionsLength);

    questionsSortRandomize = question => {
        for (let index = question.length - 1; index > 0; index--) {
            let indexRandom = Math.floor(Math.random() * (index));

            [question[index], question[indexRandom]] = [question[indexRandom], question[index]]
        }

        return question;
    }

    getTwelveQuestions = questions => {
        const questionsRandomize = this.questionsSortRandomize(questions)
        const questionsQuantity = questionsRandomize.length;
        const startIndex = this.randomStartIndex(questionsQuantity);
        const endIndex = startIndex + 12;
        const twelveQuestions = questionsRandomize.slice(startIndex, endIndex);

        return twelveQuestions.length < 12 ? questionsRandomize.slice(endIndex, endIndex + (12 - twelveQuestions.length)) : twelveQuestions;
    }

    saveUserQuestionsId = (saveQuestions, idUsedQuestions) => {
        saveQuestions.forEach(question => idUsedQuestions.push(question.qid))

        return idUsedQuestions
    }
}

module.exports = Controller;
