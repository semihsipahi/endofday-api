import { Repository } from "typeorm";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { TransactionTypeDto } from "./dto/transaction-type.dto";
import { TransactionType } from "./entities/transaction-type.entity";
import { Transaction } from "./entities/transaction.entity";
export declare class TransactionsService {
    private readonly transactionRepo;
    private readonly transactionTypeRepo;
    constructor(transactionRepo: Repository<Transaction>, transactionTypeRepo: Repository<TransactionType>);
    createTransaction(dto: CreateTransactionDto): Promise<Transaction>;
    getTransactionTypes(): Promise<TransactionTypeDto[]>;
}
