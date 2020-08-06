import { ICurrentUser } from './model.interfaces';
export declare class ModelController {
    private regUsers;
    addUser(user: ICurrentUser): void;
    checkUser(currentUser: ICurrentUser): boolean;
    getAllUsers(): object[];
}
