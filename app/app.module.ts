import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import {ModelController} from '../model/model.controller';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [ModelController],
})

export class AppModule {}
