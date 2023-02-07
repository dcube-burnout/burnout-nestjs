import { Migration } from '@mikro-orm/migrations';

export class Migration20230207121557 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "appreciation" drop constraint "appreciation_session_id_foreign";');

    this.addSql('alter table "appreciation" drop column "session_id";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "appreciation" add column "session_id" int not null;');
    this.addSql(
      'alter table "appreciation" add constraint "appreciation_session_id_foreign" foreign key ("session_id") references "session" ("id") on update cascade;',
    );
  }
}
