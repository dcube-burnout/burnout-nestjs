import { Entity, Enum, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Team } from 'src/teams/entities/team.entity';
import { SessionRepository } from './session.repository';

export enum Progress {
  inProgress = 'IN_PROGRESS',
  done = 'DONE',
}

@Entity({ repository: () => SessionRepository })
export class Session {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => Team)
  team: Team;

  @Property()
  title: string;

  @Property({ columnType: 'date' })
  date: Date;

  @Enum(() => Progress)
  progress: Progress;
}
