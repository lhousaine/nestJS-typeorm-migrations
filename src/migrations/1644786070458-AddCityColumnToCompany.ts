import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCityColumnToCompany1644786070458 implements MigrationInterface {
  name = 'AddCityColumnToCompany1644786070458';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`company\` ADD \`city\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`company\` DROP COLUMN \`city\``);
  }
}
