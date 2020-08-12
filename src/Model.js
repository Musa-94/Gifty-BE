class Model {
    constructor() {
        this.regUsers = [];
    }

    addUser(user) {
        return this.checkUserInformation(user)
            && !this.isRegisteredUser(user)
                && this.regUsers.push(user)
                    && true;
    }

    isRegisteredUser(currentUser) {
        return this.regUsers.find(user => currentUser.phoneNumber === user.phoneNumber);
    }

    checkUserInformation(currentUser) {
        return !!currentUser.phoneNumber;
    }

    getAllUsers() {
        return this.regUsers;
    }
}

module.exports = Model;
