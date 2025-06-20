import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Account } from "./account.entity";
import { TransactionType } from "./transaction-type.entity";

@Entity({ name: "transactions" })
export class Transaction {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Account)
  @JoinColumn({ name: "account_id" })
  account: Account;

  @ManyToOne(() => TransactionType)
  @JoinColumn({ name: "transaction_type_id" })
  transactionType: TransactionType;

  @Column({ type: "timestamp" })
  date: Date;

  @Column({ nullable: true })
  description: string;

  @Column({ name: "reference_code", nullable: true })
  referenceCode: string;
}
