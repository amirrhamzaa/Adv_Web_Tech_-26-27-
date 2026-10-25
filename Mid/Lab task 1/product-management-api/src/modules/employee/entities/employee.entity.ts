
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "employees" })
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 150 })
  name!: string;

  @Column({ type: "varchar", length: 255, unique: true })
  email!: string;

  @Column({ type: "varchar", length: 30 })
  phone!: string;

  @Column({ type: "varchar", length: 255 })
  password!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column({ type: "integer" })
  yearsOfWorking!: number;
}
