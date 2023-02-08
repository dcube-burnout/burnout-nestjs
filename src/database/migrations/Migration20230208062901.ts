import { Migration } from '@mikro-orm/migrations';

export class Migration20230208062901 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table "user" add column "name" varchar(255) not null default \'\', add column "role" varchar(255) not null default \'\';',
    );
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop column "name";');
    this.addSql('alter table "user" drop column "role";');
  }
}
