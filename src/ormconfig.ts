import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export default {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'users_db',
  entities: ['dist/**/*.entity{ .ts,.js}'],
  synchronize: false,
  ssl: false,
} as MysqlConnectionOptions;
