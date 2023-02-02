import { EntityRepository } from '@mikro-orm/core';
import { Team } from './team.entity';

export class TeamRepository extends EntityRepository<Team> {}
