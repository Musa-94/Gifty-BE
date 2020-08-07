import { Controller, Get, Post, Request, Response } from '@nestjs/common';
import { ModelController } from '../model/model.controller';

@Controller()
export class AppController {
    constructor(public modelController: ModelController) {}
    @Get()
    getGift(): string {
        return 'GIFT';
    }

    @Post('addNewUser')
    setNewUser(@Request() body): void {
        this.modelController.addUser(body.body);
    }

    @Post('checkUser')
    checkRegUser(@Request() body): boolean {
        return this.modelController.isRegisteredUser(body);
    }

    @Get('getUsers')
    getAllUsers(): object[] {
        return this.modelController.getAllUsers();
    }
}
