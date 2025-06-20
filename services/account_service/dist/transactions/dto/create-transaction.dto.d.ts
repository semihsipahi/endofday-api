import { TransactionTypeCode } from "../constants/transaction-type.constants";
export declare class CreateTransactionDto {
    transactionTypeCode: TransactionTypeCode;
    accountId: string;
    referenceCode?: string;
    description?: string;
    cashAmount?: number;
    productId?: string;
    quantity?: number;
}
