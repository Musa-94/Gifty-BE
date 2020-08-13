class Controller {
    constructor(model) {
        this._model = model;
    }

    getUnusedQuestion = (question, userUsedQuestionsId) => question.filter(questions => !userUsedQuestionsId.includes(questions.qid));

    randomStartIndex = questionsLength => Math.floor(Math.random() * questionsLength);

    getTwelveQuestions = questions => {
        console.log(questions)
        const questionsQuantity = questions.length;
        const startIndex = this.randomStartIndex(questionsQuantity);
        const endIndex = startIndex + 12;
        const twelveQuestions = questions.slice(startIndex, endIndex);

        return twelveQuestions.length < 12 ? questions.slice(endIndex, endIndex + (12 - twelveQuestions.length)) : twelveQuestions;
    }

    saveUserQuestionsId = (saveQuestions, idUsedQuestions) => {
        saveQuestions.forEach(question => idUsedQuestions.push(question.qid))

        return idUsedQuestions
    }
}

module.exports = Controller;
