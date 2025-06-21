import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TransactionTypeRulesMap } from "./constants/transaction-type.constants";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { TransactionImpact } from "./entities/transaction-impact.entity";
import { TransactionType } from "./entities/transaction-type.entity";
import { Transaction } from "./entities/transaction.entity";

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepo: Repository<Transaction>,

    @InjectRepository(TransactionImpact)
    private readonly transactionImpactRepo: Repository<TransactionImpact>,

    @InjectRepository(TransactionType)
    private readonly transactionTypeRepo: Repository<TransactionType>
  ) {}

  async createTransaction(dto: CreateTransactionDto): Promise<Transaction> {
    const typeRules = TransactionTypeRulesMap[dto.transactionTypeCode];

    if (!typeRules) {
      throw new NotFoundException("Unknown transaction type");
    }

    const transactionType = await this.transactionTypeRepo.findOne({
      where: { code: dto.transactionTypeCode },
    });
    if (!transactionType) {
      throw new NotFoundException("Transaction type not found");
    }

    const account = dto.accountId ? { id: dto.accountId } : null;

    const transaction = this.transactionRepo.create({
      account,
      transactionType,
      date: new Date(),
      description: dto.description,
      referenceCode: dto.referenceCode,
    });

    const savedTransaction = await this.transactionRepo.save(transaction);

    if (!dto.impacts || dto.impacts.length === 0) {
      throw new BadRequestException(
        "At least one impact (debit or credit) must be provided"
      );
    }

    const impacts = dto.impacts.map((impact) =>
      this.transactionImpactRepo.create({
        transaction: { id: savedTransaction.id },
        currency: { id: impact.currencyId },
        debit: impact.debit ?? 0,
        credit: impact.credit ?? 0,
      })
    );

    await this.transactionImpactRepo.save(impacts);

    if (typeRules.requiresCash && dto.cashAmount) {
      console.log(`[CashService] Process → amount: ${dto.cashAmount}`);
    }

    if (typeRules.requiresStock && dto.productId && dto.quantity) {
      console.log(
        `[StockService] Process → productId: ${dto.productId}, qty: ${dto.quantity}`
      );
    }

    // İlişkili impacts ve currency dahil transaction'ı tekrar getir
    const transactionWithImpacts = await this.transactionRepo.findOne({
      where: { id: savedTransaction.id },
      relations: [
        "impacts",
        "impacts.currency",
        "account",
        "transactionType",
        "createdBy",
      ],
    });

    return transactionWithImpacts!;
  }
}
