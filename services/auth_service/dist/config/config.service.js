"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
exports.configService = {
    getTypeOrmConfig: () => ({
        type: "postgres",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities: [__dirname + "/../**/*.entity{.ts,.js}"],
        synchronize: false,
        autoLoadEntities: true,
    }),
};
//# sourceMappingURL=config.service.js.map