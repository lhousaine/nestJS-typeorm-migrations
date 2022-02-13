import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCityColumnToCompany1644787918599 implements MigrationInterface {
  name = 'AddCityColumnToCompany1644787918599';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`company\` ADD \`adress\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`company\` DROP COLUMN \`adress\``);
  }
}
