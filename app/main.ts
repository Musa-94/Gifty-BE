import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 2020;

async function startServer() {
    const app = await NestFactory.create(AppModule);
    await app.listen(port);
}

startServer().then(() => console.log('SERVER STARTED ON PORT:', port));
