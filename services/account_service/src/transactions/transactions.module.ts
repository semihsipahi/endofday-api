import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionImpact } from "../entities/transaction-impact.entity";
import { TransactionType } from "../entities/transaction-type.entity";
import { Transaction } from "../entities/transaction.entity";
import { TransactionsController } from "./transactions.controller";
import { TransactionsService } from "./transactions.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction, TransactionType, TransactionImpact]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
