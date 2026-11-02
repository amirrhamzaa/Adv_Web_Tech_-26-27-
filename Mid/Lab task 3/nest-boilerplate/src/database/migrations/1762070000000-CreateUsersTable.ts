
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1762070000000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "full_name",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "age",
            type: "integer",
            isNullable: false,
          },
          {
            name: "phone",
            type: "varchar",
            length: "11",
            isNullable: false,
          },
          {
            name: "account_type",
            type: "varchar",
            length: "20",
            isNullable: false,
          },
          {
            name: "address",
            type: "varchar",
            length: "255",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
