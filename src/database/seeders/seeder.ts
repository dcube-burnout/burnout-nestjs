import { Seeder } from '@mikro-orm/seeder';
import { EntityManager } from '@mikro-orm/core';
import { User } from 'src/users/entities/user.entity';
import { Team } from 'src/teams/entities/team.entity';
import { Progress, Session } from 'src/sessions/entities/session.entity';

const teamData = [{ leader_id: 1 }, { leader_id: 3 }];

const userData = [
  { login: 'John', password: '123', team: 1 },
  { login: 'Jane', password: '456', team: 1 },
  { login: 'Joey', password: '789', team: 2 },
];

const sessionData = [
  { team: 1, title: 'Sprint 142', date: '02/03/2023', progress: Progress.done },
  { team: 1, title: 'Sprint 143', date: '03/03/2023', progress: Progress.inProgress },
  { team: 2, title: 'Sprint 143', date: '03/03/2023', progress: Progress.inProgress },
];

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    teamData.map((i) => em.create(Team, i));
    userData.map((i) => em.create(User, i));
    sessionData.map((i) => em.create(Session, i));
    await em.flush();
  }
}
