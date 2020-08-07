import {ICurrentUser, ICurrentUserCheckInfo} from './model.interfaces';

export class ModelController {
    private regUsers = [];

    public addUser(user: ICurrentUser): void {
        this.checkInfoUser(user)
            && !this.isRegisteredUser(user)
                && this.regUsers.push(user);
    }

    public isRegisteredUser(currentUser: ICurrentUser): boolean {
        return this.regUsers.some(user => currentUser.phoneNumber === user.phoneNumber);
    }

    public checkInfoUser(currentUser: ICurrentUserCheckInfo): boolean {
        return !!currentUser.phoneNumber;
    }

    public getAllUsers(): object[] {
        return this.regUsers;
    }
}
