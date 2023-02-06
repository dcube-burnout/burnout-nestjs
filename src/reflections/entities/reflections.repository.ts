import { EntityRepository } from '@mikro-orm/core';
import { Reflection } from './reflections.entity';

export class ReflectionsRepository extends EntityRepository<Reflection> { }
