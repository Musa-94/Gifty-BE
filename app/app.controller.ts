import { Controller, Get, Post, Request, Response } from '@nestjs/common';
import { ModelController } from '../model/model.controller';

@Controller('users')
export class AppController {
    constructor(public modelController: ModelController) {}
    @Get('gift')
    getGift(): string {
        return 'GIFT';
    }

    @Post('addNewUser')
    setNewUser(@Request() body): void {
        this.modelController.addUser(body.body);
    }

    @Post('checkUser')
    checkRegUser(@Request() body): boolean {
        return this.modelController.checkUser(body);
    }

    @Get('getUsers')
    getAllUsers(): object[] {
        return this.modelController.getAllUsers();
    }
}
