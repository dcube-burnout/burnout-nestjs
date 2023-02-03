import { Migration } from '@mikro-orm/migrations';

export class Migration20230203070606 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "session" ("id" serial primary key, "team_id" int not null, "title" varchar(255) not null, "date" date not null, "progress" text check ("progress" in (\'IN_PROGRESS\', \'DONE\')) not null);',
    );

    this.addSql(
      'alter table "session" add constraint "session_team_id_foreign" foreign key ("team_id") references "team" ("id") on update cascade;',
    );

    this.addSql('alter table "user" drop constraint "user_team_id_foreign";');

    this.addSql(
      'alter table "user" add constraint "user_team_id_foreign" foreign key ("team_id") references "team" ("id") on update cascade on delete set null;',
    );
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "session" cascade;');

    this.addSql('alter table "user" drop constraint "user_team_id_foreign";');

    this.addSql(
      'alter table "user" add constraint "user_team_id_foreign" foreign key ("team_id") references "team" ("id") on update cascade on delete no action;',
    );
  }
}
