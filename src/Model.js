class Model {
    constructor() {
        this.regUsers = [];
    }

    addUser(user) {
        this.checkUserInformation(user)
            && !this.isRegisteredUser(user)
            && this.regUsers.push(user);
    }

    isRegisteredUser(currentUser) {
        return this.regUsers.some(user => currentUser.phoneNumber === user.phoneNumber);
    }

    checkUserInformation(currentUser) {
        return currentUser.phoneNumber;
    }

    getAllUsers() {
        return this.regUsers;
    }
}

module.exports = Model;
