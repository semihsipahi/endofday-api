import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { TransactionTypeField } from "../../../shared/types/transaction-type-field";
import { TransactionTypeCode } from "../contants/transaction-type.constants";

@Entity("transaction_type_meta_schemas")
export class TransactionTypeMetaSchema {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "enum", enum: TransactionTypeCode })
  transactionTypeCode: TransactionTypeCode;

  @Column({ type: "jsonb" })
  schema: TransactionTypeField[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
