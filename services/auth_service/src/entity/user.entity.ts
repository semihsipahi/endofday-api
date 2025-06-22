import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Branch } from "../entity/branch.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  clerkUserId: string;

  @Column({ unique: true })
  email: string;

  @Column()
  fullName: string;

  @Column()
  role: string;

  @ManyToOne(() => Branch, { eager: true })
  @JoinColumn({ name: "branch_id" })
  branch: Branch;
}
