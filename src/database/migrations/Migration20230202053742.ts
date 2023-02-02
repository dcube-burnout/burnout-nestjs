import { Migration } from '@mikro-orm/migrations';

export class Migration20230202053742 extends Migration {
  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "login" varchar(255) not null);');
    this.addSql('alter table "user" add constraint "user_login_unique" unique ("login");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }
}
