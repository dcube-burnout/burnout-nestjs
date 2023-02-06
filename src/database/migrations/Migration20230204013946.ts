import { Migration } from '@mikro-orm/migrations';

export class Migration20230204013946 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "reflection" rename column "user_id" to "user_id_id";');
    this.addSql('alter table "reflection" add constraint "reflection_user_id_id_foreign" foreign key ("user_id_id") references "user" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "reflection" drop constraint "reflection_user_id_id_foreign";');

    this.addSql('alter table "reflection" rename column "user_id_id" to "user_id";');
  }

}
