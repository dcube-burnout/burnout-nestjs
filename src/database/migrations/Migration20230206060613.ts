import { Migration } from '@mikro-orm/migrations';

export class Migration20230206060613 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "appreciation" ("id" serial primary key, "session_id" int not null, "giver_id" int not null, "receiver_id" int not null, "writeup" text not null);',
    );

    this.addSql(
      'alter table "appreciation" add constraint "appreciation_session_id_foreign" foreign key ("session_id") references "session" ("id") on update cascade;',
    );
    this.addSql(
      'alter table "appreciation" add constraint "appreciation_giver_id_foreign" foreign key ("giver_id") references "user" ("id") on update cascade;',
    );
    this.addSql(
      'alter table "appreciation" add constraint "appreciation_receiver_id_foreign" foreign key ("receiver_id") references "user" ("id") on update cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "appreciation" cascade;');
  }
}
