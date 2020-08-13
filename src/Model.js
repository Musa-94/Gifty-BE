class Model {
    constructor() {
        this.regUsers = [];
    }

    addUser(user) {
        return this.checkUserInformation(user)
            && !this.isRegisteredUser(user)
                && !!this.regUsers.push(user)
    }

    isRegisteredUser(currentUser) {
        return this.regUsers.find(user => currentUser.phoneNumber === user.phoneNumber);
    }

    getUserUsedQuestions(currentUser) {
        return this.regUsers.find(user => currentUser.phoneNumber === user.phoneNumber).idUsedQuestions;
    }

    checkUserInformation(currentUser) {
        return !!currentUser.phoneNumber;
    }

    updateIdUserUsedQuestions(currentUser, idUserUsedQuestions) {
        this.regUsers.forEach((user, index) => {
            if(currentUser.phoneNumber === user.phoneNumber) {
                user.idUsedQuestions = idUserUsedQuestions;
                console.log('ID USED QUESTIONS UPDATE FOR USER:', user);

                return;
            }
        });
    }

    getAllUsers() {
        return this.regUsers;
    }
}

module.exports = Model;
