import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function startServer() {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT || 2020);
}

startServer().then(() => console.log('SERVER STARTED'));
