import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { TransactionTypeDto } from "./dto/transaction-type.dto";
import { Transaction } from "./entities/transaction.entity";
import { TransactionsService } from "./transactions.service";
export declare class TransactionsController {
    private readonly trxService;
    constructor(trxService: TransactionsService);
    create(dto: CreateTransactionDto): Promise<Transaction>;
    getTypes(): Promise<TransactionTypeDto[]>;
}
