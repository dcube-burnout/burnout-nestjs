import { Seeder } from '@mikro-orm/seeder';
import { EntityManager } from '@mikro-orm/core';
import { User } from 'src/users/entities/user.entity';
import { Team } from 'src/teams/entities/team.entity';
import { Progress, Session } from 'src/sessions/entities/session.entity';

const teamData = [{ id: 1, leader_id: 1 }];

const userData = [
  { id: 1, login: 'John', password: '123', team: 1 },
  { id: 2, login: 'Jane', password: '456', team: 1 },
];

const sessionData = [
  { id: 1, team_id: 1, title: 'Sprint 142', date: '02/03/2023', progress: Progress.inProgress },
];

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    await em.upsertMany(Team, teamData);
    await em.upsertMany(User, userData);
    await em.upsertMany(Session, sessionData);
  }
}
