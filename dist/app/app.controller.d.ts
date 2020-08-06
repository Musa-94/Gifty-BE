import { ModelController } from '../model/model.controller';
export declare class AppController {
    modelController: ModelController;
    constructor(modelController: ModelController);
    getGift(): string;
    setNewUser(body: any): void;
    checkRegUser(body: any): boolean;
    getAllUsers(): object[];
}
