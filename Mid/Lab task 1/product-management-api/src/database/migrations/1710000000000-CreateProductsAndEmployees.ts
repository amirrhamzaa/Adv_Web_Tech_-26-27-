
import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductsAndEmployees1710000000000
  implements MigrationInterface
{
  name = "CreateProductsAndEmployees1710000000000";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "products" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR(150) NOT NULL,
        "category" VARCHAR(100) NOT NULL,
        "price" DOUBLE PRECISION NOT NULL,
        "quantity" INTEGER NOT NULL
      )
    `);

    await queryRunner.query(`
      CREATE TABLE "employees" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR(150) NOT NULL,
        "email" VARCHAR(255) NOT NULL UNIQUE,
        "phone" VARCHAR(30) NOT NULL,
        "password" VARCHAR(255) NOT NULL,
        "age" INTEGER NOT NULL,
        "years_of_working" INTEGER NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "employees"`);
    await queryRunner.query(`DROP TABLE "products"`);
  }
}
