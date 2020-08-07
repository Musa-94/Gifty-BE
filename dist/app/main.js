"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function startServer() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(2020);
}
startServer().then(() => console.log('SERVER STARTED'));
//# sourceMappingURL=main.js.map