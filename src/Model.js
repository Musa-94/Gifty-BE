class Model {
    constructor() {
        this.regUsers = [];
    }

    addUser(user) {
        !this.checkUser(user) && this.regUsers.push(user);
    }

    checkUser(currentUser) {
        return this.regUsers.some(user => currentUser.phoneNumber === user.phoneNumber);
    }

    getAllUsers() {
        return this.regUsers;
    }
}

module.exports = Model;
