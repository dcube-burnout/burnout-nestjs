import { Migration } from '@mikro-orm/migrations';

export class Migration20230206073003 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "reflection" drop constraint "reflection_session_id_id_foreign";');
    this.addSql('alter table "reflection" drop constraint "reflection_user_id_id_foreign";');

    this.addSql(
      'alter table "reflection" add column "session_id" int not null, add column "user_id" int not null;',
    );
    this.addSql(
      'alter table "reflection" add constraint "reflection_session_id_foreign" foreign key ("session_id") references "session" ("id") on update cascade;',
    );
    this.addSql(
      'alter table "reflection" add constraint "reflection_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;',
    );
    this.addSql('alter table "reflection" drop column "session_id_id";');
    this.addSql('alter table "reflection" drop column "user_id_id";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "reflection" drop constraint "reflection_session_id_foreign";');
    this.addSql('alter table "reflection" drop constraint "reflection_user_id_foreign";');

    this.addSql(
      'alter table "reflection" add column "session_id_id" int not null, add column "user_id_id" int not null;',
    );
    this.addSql(
      'alter table "reflection" add constraint "reflection_session_id_id_foreign" foreign key ("session_id_id") references "session" ("id") on update cascade;',
    );
    this.addSql(
      'alter table "reflection" add constraint "reflection_user_id_id_foreign" foreign key ("user_id_id") references "user" ("id") on update cascade;',
    );
    this.addSql('alter table "reflection" drop column "session_id";');
    this.addSql('alter table "reflection" drop column "user_id";');
  }
}
