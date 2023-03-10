import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Team } from 'src/teams/entities/team.entity';
import { UsersRepository } from './users.repository';

@Entity({ repository: () => UsersRepository })
export class User {
  @PrimaryKey()
  id!: number;

  @Property({ unique: true })
  login!: string;

  @Property()
  password!: string;

  @Property({ default: '' })
  name!: string;

  @Property({ default: '' })
  role!: string;

  @ManyToOne(() => Team)
  team?: Team;
}
