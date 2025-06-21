import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "branches" })
export class Branch {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  code: string; // e.g., "KARDESLER", "ALTINBAS"
}
