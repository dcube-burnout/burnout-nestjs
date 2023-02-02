import { Migration } from '@mikro-orm/migrations';

export class Migration20230120085118 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "entry" ("id" serial primary key, "login" varchar(255) not null, "name" varchar(255) not null, "salary" int not null);',
    );
    this.addSql('alter table "entry" add constraint "entry_login_unique" unique ("login");');
  }
}
