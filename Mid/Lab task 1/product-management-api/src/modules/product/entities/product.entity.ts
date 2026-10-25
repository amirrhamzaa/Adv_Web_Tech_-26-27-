import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 150 })
  name!: string;

  @Column({ type: "varchar", length: 100 })
  category!: string;

  @Column({ type: "double precision" })
  price!: number;

  @Column({ type: "integer" })
  quantity!: number;
}