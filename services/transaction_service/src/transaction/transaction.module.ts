import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionImpact } from "../../../transaction_service/src/entity/transaction-impact.entity";
import { TransactionType } from "../../../transaction_service/src/entity/transaction-type.entity";
import { Transaction } from "../../../transaction_service/src/entity/transaction.entity";
import { TransactionsController } from "../transaction/transaction.controller";
import { TransactionsService } from "../transaction/transaction.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction, TransactionType, TransactionImpact]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
