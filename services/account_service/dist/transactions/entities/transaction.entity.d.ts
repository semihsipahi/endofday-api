import { Account } from "./account.entity";
import { TransactionType } from "./transaction-type.entity";
export declare class Transaction {
    id: string;
    account: Account;
    transactionType: TransactionType;
    date: Date;
    description: string;
    referenceCode: string;
}
