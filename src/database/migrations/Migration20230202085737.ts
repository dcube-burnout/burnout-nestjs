import { Migration } from '@mikro-orm/migrations';

export class Migration20230202085737 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "team" ("id" serial primary key, "leader_id" int not null);');
    this.addSql('alter table "team" add constraint "team_leader_id_unique" unique ("leader_id");');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "team" cascade;');
  }

}
