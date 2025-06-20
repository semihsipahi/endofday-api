import { TransactionType } from "transactions/entities/transaction-type.entity";
export declare class TransactionTypeDto {
    id: string;
    code: string;
    name: string;
    description: string;
    static fromEntity(entity: TransactionType): TransactionTypeDto;
    static fromEntities(entities: TransactionType[]): TransactionTypeDto[];
}
