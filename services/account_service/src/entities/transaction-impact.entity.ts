import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Currency } from "./currency.entity";
import { Transaction } from "./transaction.entity";

@Entity("transaction_impacts")
export class TransactionImpact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Transaction, (tx) => tx.impacts, { onDelete: "CASCADE" })
  @JoinColumn({ name: "transaction_id" })
  transaction: Transaction;

  @ManyToOne(() => Currency)
  @JoinColumn({ name: "currency_id" })
  currency: Currency;

  @Column({ type: "decimal", default: 0 })
  debit: number;

  @Column({ type: "decimal", default: 0 })
  credit: number;
}
