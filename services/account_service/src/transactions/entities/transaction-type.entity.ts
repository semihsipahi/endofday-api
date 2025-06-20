import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "transaction_types" })
export class TransactionType {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  code: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;
}
