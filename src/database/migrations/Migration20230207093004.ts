import { Migration } from '@mikro-orm/migrations';

export class Migration20230207093004 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "burnout_inv" ("id" serial primary key, "responses" text[] not null, "exhaution" int not null, "depersonalisation" int not null, "fulfilment" int not null, "overall" smallint not null, "reflection_id" int not null);',
    );
    this.addSql(
      'alter table "burnout_inv" add constraint "burnout_inv_reflection_id_unique" unique ("reflection_id");',
    );

    this.addSql(
      'alter table "burnout_inv" add constraint "burnout_inv_reflection_id_foreign" foreign key ("reflection_id") references "reflection" ("id") on update cascade;',
    );

    this.addSql('alter table "reflection" add column "burnout_inv_id_id" int not null;');
    this.addSql(
      'alter table "reflection" add constraint "reflection_burnout_inv_id_id_foreign" foreign key ("burnout_inv_id_id") references "burnout_inv" ("id") on update cascade;',
    );
    this.addSql(
      'alter table "reflection" add constraint "reflection_burnout_inv_id_id_unique" unique ("burnout_inv_id_id");',
    );
  }

  async down(): Promise<void> {
    this.addSql('alter table "reflection" drop constraint "reflection_burnout_inv_id_id_foreign";');

    this.addSql('drop table if exists "burnout_inv" cascade;');

    this.addSql('alter table "reflection" drop constraint "reflection_burnout_inv_id_id_unique";');
    this.addSql('alter table "reflection" drop column "burnout_inv_id_id";');
  }
}
