"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const model_controller_1 = require("../model/model.controller");
let AppController = class AppController {
    constructor(modelController) {
        this.modelController = modelController;
    }
    getGift() {
        return 'GIFT';
    }
    setNewUser(body) {
        this.modelController.addUser(body.body);
    }
    checkRegUser(body) {
        return this.modelController.isRegisteredUser(body);
    }
    getAllUsers() {
        return this.modelController.getAllUsers();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getGift", null);
__decorate([
    common_1.Post('addNewUser'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "setNewUser", null);
__decorate([
    common_1.Post('checkUser'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Boolean)
], AppController.prototype, "checkRegUser", null);
__decorate([
    common_1.Get('getUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getAllUsers", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [model_controller_1.ModelController])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map