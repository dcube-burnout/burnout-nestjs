import { Migration } from '@mikro-orm/migrations';

export class Migration20230203105430 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "reflection" ("id" serial primary key, "session_id_id" int not null, "user_id" int not null, "achievements" int not null);');

    this.addSql('alter table "reflection" add constraint "reflection_session_id_id_foreign" foreign key ("session_id_id") references "session" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "reflection" cascade;');
  }

}
