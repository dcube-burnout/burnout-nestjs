import { Collection, Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from '../../users/entities/user.entity';
import { TeamRepository } from './team.repository';

@Entity({ repository: () => TeamRepository })
export class Team {
  @PrimaryKey()
  id!: number;

  @Property({ unique: true })
  leader_id!: number;

  @OneToMany(() => User, user => user.team)
  users = new Collection<User>(this);
}
