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
import { Account } from "./account.entity";
import { TransactionImpact } from "./transaction-impact.entity";
import { TransactionType } from "./transaction-type.entity";
import { User } from "./user.entity";

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

  @ManyToOne(() => User)
  @JoinColumn({ name: "created_by" })
  createdBy: User;

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
