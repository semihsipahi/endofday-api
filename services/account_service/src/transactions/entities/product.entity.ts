import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  unit: string; // e.g., gram, adet

  @Column()
  category: string; // e.g., "gold", "scrap", "material"
}
