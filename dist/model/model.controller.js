"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelController = void 0;
class ModelController {
    constructor() {
        this.regUsers = [];
    }
    addUser(user) {
        this.checkInfoUser(user)
            && !this.isRegisteredUser(user)
            && this.regUsers.push(user);
    }
    isRegisteredUser(currentUser) {
        return this.regUsers.some(user => currentUser.phoneNumber === user.phoneNumber);
    }
    checkInfoUser(currentUser) {
        return !!currentUser.phoneNumber;
    }
    getAllUsers() {
        return this.regUsers;
    }
}
exports.ModelController = ModelController;
//# sourceMappingURL=model.controller.js.map