import { Seeder } from '@mikro-orm/seeder';
import { EntityManager } from '@mikro-orm/core';
import { User } from 'src/users/entities/user.entity';
import { Team } from 'src/teams/entities/team.entity';
import { Progress, Session } from 'src/sessions/entities/session.entity';
import { Appreciation } from 'src/appreciation/entities/appreciation.entity';

const teamData = [{ leader_id: 1 }];

const userData = [
  { login: 'anntay', name: 'Ann Tay', role: 'Software Enginner', password: '123', team: 1 },
  { login: 'johnlim', name: 'John Lim', role: 'Software Enginner', password: '123', team: 1 },
  { login: 'harryteo', name: 'Harry Teo', role: 'Software Enginner', password: '123', team: 1 },
  { login: 'richardlee', name: 'Richard Lee', role: 'UX Designer', password: '123', team: 1 },
  { login: 'charlotteau', name: 'Charlotte Au', role: 'UX Designer', password: '123', team: 1 },
  { login: 'rebeccaloh', name: 'Rebecca Loh', role: 'UX Designer', password: '123', team: 1 },
  { login: 'martintay', name: 'Martin Tay', role: 'Marketing', password: '123', team: 1 },
  { login: 'sarahpeh', name: 'Sarah Peh', role: 'Product Manager', password: '123', team: 1 },
  { login: 'joeylee', name: 'Joey Lee', role: 'Sales', password: '789' },
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
