import { Migration } from '@mikro-orm/migrations';

export class Migration20230125074336 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("id" serial primary key, "login" varchar(255) not null, "name" varchar(255) not null, "salary" int not null);',
    );
    this.addSql('alter table "user" add constraint "user_login_unique" unique ("login");');

    this.addSql('drop table if exists "entry" cascade;');
  }

  async down(): Promise<void> {
    this.addSql(
      'create table "entry" ("id" serial primary key, "login" varchar(255) not null, "name" varchar(255) not null, "salary" int not null);',
    );
    this.addSql('alter table "entry" add constraint "entry_login_unique" unique ("login");');

    this.addSql('drop table if exists "user" cascade;');
  }
}
