import { Migration } from '@mikro-orm/migrations';

export class Migration20230202092147 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "user" add column "team_id" int;');
    this.addSql(
      'alter table "user" add constraint "user_team_id_foreign" foreign key ("team_id") references "team" ("id") on update cascade;',
    );
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop constraint "user_team_id_foreign";');

    this.addSql('alter table "user" drop column "team_id";');
  }
}
