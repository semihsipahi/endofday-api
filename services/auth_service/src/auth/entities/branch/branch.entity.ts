import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("branch")
export class Branch {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
}
