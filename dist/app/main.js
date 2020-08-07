"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const port = process.env.PORT || 2020;
async function startServer() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(port);
}
startServer().then(() => console.log('SERVER STARTED ON PORT:', port));
//# sourceMappingURL=main.js.map