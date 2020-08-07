import { ICurrentUser, ICurrentUserCheckInfo } from './model.interfaces';
export declare class ModelController {
    private regUsers;
    addUser(user: ICurrentUser): void;
    isRegisteredUser(currentUser: ICurrentUser): boolean;
    checkInfoUser(currentUser: ICurrentUserCheckInfo): boolean;
    getAllUsers(): object[];
}
