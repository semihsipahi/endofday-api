import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("currencies")
export class Currency {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  code: string;

  @Column()
  name: string;
}
