import { Seeder } from '@mikro-orm/seeder';
import { EntityManager } from '@mikro-orm/core';
import { User } from 'src/users/entities/user.entity';
import { Team } from 'src/teams/entities/team.entity';
import { Progress, Session } from 'src/sessions/entities/session.entity';
import { Appreciation } from 'src/appreciation/entities/appreciation.entity';

const teamData = [{ leader_id: 1 }];

const userData = [
  { login: 'Ann Smith', password: '123', team: 1 },
  { login: 'John Lim', password: '123', team: 1 },
  { login: 'Harry Teo', password: '123', team: 1 },
  { login: 'Richard Lee', password: '123', team: 1 },
  { login: 'Charlotte Au', password: '123', team: 1 },
  { login: 'Rebecca Loh', password: '123', team: 1 },
  { login: 'Martin Tay', password: '123', team: 1 },
  { login: 'Sarah Peh', password: '123', team: 1 },
  { login: 'Joey Lee', password: '789' },
];

const sessionData = [
  { team: 1, title: 'Sprint 112', date: '01/05/2023', progress: Progress.done },
  { team: 1, title: 'Sprint 113', date: '01/12/2022', progress: Progress.done },
  { team: 1, title: 'Sprint 114', date: '01/19/2022', progress: Progress.done },
  { team: 1, title: 'Sprint 114', date: '01/26/2022', progress: Progress.done },
];

const appreciationData = [
  { session: 1, giver: 1, receiver: 2, writeup: 'Great job!' },
  { session: 1, giver: 2, receiver: 1, writeup: 'Thanks for helping with the wireframe! :)' },
  { session: 1, giver: 3, receiver: 1, writeup: 'Good job with the status check' },
  { session: 1, giver: 7, receiver: 1, writeup: 'The buttons look great, good work' },
  { session: 1, giver: 4, receiver: 1, writeup: 'Thanks for helping me with the app demo' },
];

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    teamData.map((i) => em.create(Team, i));
    userData.map((i) => em.create(User, i));
    sessionData.map((i) => em.create(Session, i));
    appreciationData.map((i) => em.create(Appreciation, i));
    await em.flush();
  }
}
