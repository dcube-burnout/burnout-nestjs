import { EntityRepository, EntityData } from '@mikro-orm/core';
import { User } from './user.entity';

export class UsersRepository extends EntityRepository<User> {
  upsertMany(entities: EntityData<User>[]) {
    return this._em.upsertMany(User, entities);
  }
}
