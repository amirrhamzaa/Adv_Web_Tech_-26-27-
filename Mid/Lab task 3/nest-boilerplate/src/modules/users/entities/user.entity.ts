
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  fullName!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column()
  age!: number;

  @Column({ length: 11 })
  phone!: string;

  @Column({ length: 20 })
  accountType!: string;

  @Column({ type: "varchar", length: 255, nullable: true })
  address?: string;

  @CreateDateColumn()
  createdAt!: Date;
}
