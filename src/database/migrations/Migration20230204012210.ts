import { Migration } from '@mikro-orm/migrations';

export class Migration20230204012210 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "reflection" alter column "achievements" type varchar(255) using ("achievements"::varchar(255));');
  }

  async down(): Promise<void> {
    this.addSql('alter table "reflection" alter column "achievements" type int using ("achievements"::int);');
  }

}
