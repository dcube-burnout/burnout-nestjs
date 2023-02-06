import { EntityData, EntityRepository } from '@mikro-orm/core';
import { Appreciation } from './entities/appreciation.entity';

export class AppreciationRepository extends EntityRepository<Appreciation> {
  async createAppreciation(appreciation: EntityData<Appreciation>) {
    const appreciationObj = this.create(appreciation);
    await this.flush();

    return appreciationObj;
  }
}
