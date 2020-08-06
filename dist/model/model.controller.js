"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelController = void 0;
class ModelController {
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
exports.ModelController = ModelController;
//# sourceMappingURL=model.controller.js.map