class Model {
    constructor() {
        this.regUsers = [];
        this.adminCredentials = {
            login: 'Gifty',
            password: 'gift123'
        }
    };

    checkValidAdminCredential({ login, password }) {
        return this.adminCredentials.login === login && this.adminCredentials.password === password;
    };

    getUserHistoryScore(userPhoneNumber) {
        const { historyScore } = this.findUserByPhoneNumber(userPhoneNumber);

        return historyScore;
    }

    addUser(user) {
        return this.checkUserInformation(user)
            && !this.isRegisteredUser(user)
                && this.regUsers.push(user);
    };

    isRegisteredUser(currentUser) {
        return this.findUserByPhoneNumber(currentUser);
    };

    getUserUsedQuestions(currentUser) {
        const { idUsedQuestions } = this.findUserByPhoneNumber(currentUser);

        return idUsedQuestions;
    };

    checkUserInformation(currentUser) {
        if (!currentUser) {
            console.log('NOT INFORMATION BY CURRENT USER');

            return;
        }

        return currentUser.phoneNumber && currentUser.idUsedQuestions && currentUser.historyScore;
    };

    findUserByPhoneNumber({ phoneNumber }) {
        return this.regUsers.find(user => phoneNumber === user.phoneNumber);
    };

    updateHistoryScore({ todayHistoryScore, phoneNumber }) {
        const user = this.findUserByPhoneNumber({ phoneNumber });
        const { historyScore } = user;

        historyScore.push(todayHistoryScore);
        console.log('historyScore', historyScore);
    };

    updateIdUserUsedQuestions(currentUser, idUserUsedQuestions) {
        this.regUsers.forEach((user, index) => {
            if(currentUser.phoneNumber === user.phoneNumber) {
                user.idUsedQuestions = idUserUsedQuestions;
                console.log('ID USED QUESTIONS UPDATE FOR USER:', user);

                return;
            }
        });
    };

    getAllUsers() {
        return this.regUsers;
    };
}

module.exports = Model;
