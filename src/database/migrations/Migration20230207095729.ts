import { Migration } from '@mikro-orm/migrations';

export class Migration20230207095729 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "burnout_inv" drop constraint "burnout_inv_reflection_id_foreign";');

    this.addSql('alter table "burnout_inv" drop constraint "burnout_inv_reflection_id_unique";');
    this.addSql('alter table "burnout_inv" drop column "reflection_id";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "burnout_inv" add column "reflection_id" int4 null default null;');
    this.addSql(
      'alter table "burnout_inv" add constraint "burnout_inv_reflection_id_foreign" foreign key ("reflection_id") references "reflection" ("id") on update cascade on delete set null;',
    );
    this.addSql(
      'alter table "burnout_inv" add constraint "burnout_inv_reflection_id_unique" unique ("reflection_id");',
    );
  }
}
