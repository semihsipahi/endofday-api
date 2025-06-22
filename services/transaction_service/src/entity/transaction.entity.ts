import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TransactionImpact } from "./transaction-impact.entity";
import { TransactionType } from "./transaction-type.entity";

@Entity({ name: "transactions" })
export class Transaction {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "account_id" })
  account_id: string;

  @ManyToOne(() => TransactionType)
  @JoinColumn({ name: "transaction_type_id" })
  transactionType: TransactionType;

  @Column({ name: "created_by" })
  createdBy: string;

  @Column({ type: "timestamp" })
  date: Date;

  @Column({ nullable: true })
  description: string;

  @Column({ name: "reference_code", nullable: true })
  referenceCode: string;

  @OneToMany(() => TransactionImpact, (impact) => impact.transaction, {
    cascade: true,
  })
  impacts: TransactionImpact[];

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
