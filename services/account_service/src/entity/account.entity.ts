import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "accounts" })
export class Account {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "branch_id" })
  branch_id: string;

  @Column()
  name: string;

  @Column()
  type: string;
}
