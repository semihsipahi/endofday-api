import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const entitiesPath = __dirname + "/../**/*.entity.{ts,js}";

export const configService = {
  getTypeOrmConfig: (): TypeOrmModuleOptions => ({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [entitiesPath],
    synchronize: false,
    autoLoadEntities: true,
  }),
};
