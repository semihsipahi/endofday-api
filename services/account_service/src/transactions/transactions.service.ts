import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TransactionTypeRulesMap } from "./constants/transaction-type.constants";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { TransactionTypeDto } from "./dto/transaction-type.dto";
import { TransactionType } from "./entities/transaction-type.entity";
import { Transaction } from "./entities/transaction.entity";

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepo: Repository<Transaction>,

    @InjectRepository(TransactionType)
    private readonly transactionTypeRepo: Repository<TransactionType>
  ) {}

  async createTransaction(dto: CreateTransactionDto): Promise<Transaction> {
    const typeRules = TransactionTypeRulesMap[dto.transactionTypeCode];

    if (!typeRules) {
      throw new NotFoundException("Unknown transaction type");
    }

    const transaction = this.transactionRepo.create({
      account: dto.accountId ? { id: dto.accountId } : null,
      transactionType: { code: dto.transactionTypeCode },
      date: new Date(),
      description: dto.description,
      referenceCode: dto.referenceCode,
    });

    const saved = await this.transactionRepo.save(transaction);

    if (typeRules.requiresCash && dto.cashAmount) {
      console.log(`[CashService] Process → amount: ${dto.cashAmount}`);
    }

    if (typeRules.requiresStock && dto.productId && dto.quantity) {
      console.log(
        `[StockService] Process → productId: ${dto.productId}, qty: ${dto.quantity}`
      );
    }

    return saved;
  }

  async getTransactionTypes(): Promise<TransactionTypeDto[]> {
    const types = await this.transactionTypeRepo.find({
      select: ["id", "code", "name", "description"],
      order: { name: "ASC" },
    });

    // DTO içindeki factory metodunu kullanıyoruz:
    return TransactionTypeDto.fromEntities(types);
  }
}
