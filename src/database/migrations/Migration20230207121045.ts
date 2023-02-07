import { Migration } from '@mikro-orm/migrations';

export class Migration20230207121045 extends Migration {
  async up(): Promise<void> {
    this.addSql('alter table "burnout_inv" rename column "exhaution" to "exhaustion";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "burnout_inv" rename column "exhaustion" to "exhaution";');
  }
}
