import { Migration } from '@mikro-orm/migrations';

export class Migration20230207093650 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "burnout_inv" drop constraint "burnout_inv_reflection_id_foreign";');

    this.addSql(
      'alter table "burnout_inv" alter column "reflection_id" type int using ("reflection_id"::int);',
    );
    this.addSql('alter table "burnout_inv" alter column "reflection_id" drop not null;');
    this.addSql(
      'alter table "burnout_inv" add constraint "burnout_inv_reflection_id_foreign" foreign key ("reflection_id") references "reflection" ("id") on update cascade on delete set null;',
    );
  }

  async down(): Promise<void> {
    this.addSql('alter table "burnout_inv" drop constraint "burnout_inv_reflection_id_foreign";');

    this.addSql(
      'alter table "burnout_inv" alter column "reflection_id" type int using ("reflection_id"::int);',
    );
    this.addSql('alter table "burnout_inv" alter column "reflection_id" set not null;');
    this.addSql(
      'alter table "burnout_inv" add constraint "burnout_inv_reflection_id_foreign" foreign key ("reflection_id") references "reflection" ("id") on update cascade;',
    );
  }
}
