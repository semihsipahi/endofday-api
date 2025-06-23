import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionsModule } from "transaction/transaction.module";
import { TransactionTypeModule } from "transaction_type/transaction-type.module";
import { configService } from "./config/config.service";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TransactionsModule,
    TransactionTypeModule,
  ],
})
export class AppModule {
  constructor() {
    console.log("DB_PASS:", process.env.DB_PASS);
  }
}
