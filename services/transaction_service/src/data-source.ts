import { DataSource } from "typeorm";

const entitiesPath = __dirname + "/../**/*.entity.{ts,js}";
const migrationsPath = __dirname + "/../migrations/*.{ts,js}";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [entitiesPath],
  migrations: [migrationsPath],
});
