import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

    @Get()
    getGift(): string {
        return 'GIFT';
    }
}
