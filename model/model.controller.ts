import { ICurrentUser } from './model.interfaces';

export class ModelController {
    private regUsers = [];

    public addUser(user: ICurrentUser): void {
        !this.checkUser(user) && this.regUsers.push(user);
    }

    public checkUser(currentUser: ICurrentUser): boolean {
        return this.regUsers.some(user => currentUser.phoneNumber === user.phoneNumber);
    }

    public getAllUsers(): object[] {
        return this.regUsers;
    }
}
