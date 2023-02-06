import { EntityRepository } from '@mikro-orm/core';
import { Session } from './session.entity';

export class SessionRepository extends EntityRepository<Session> { }
