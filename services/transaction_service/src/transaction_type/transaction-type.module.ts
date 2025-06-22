import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionType } from "entity/transaction-type.entity";

@Module({
  imports: [TypeOrmModule.forFeature([TransactionType])],
})
export class TransactionTypeModule {}
