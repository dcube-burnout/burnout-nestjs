import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Session } from 'src/sessions/entities/session.entity';
import { User } from 'src/users/entities/user.entity';
import { AppreciationRepository } from '../appreciation.repository';

@Entity({ repository: () => AppreciationRepository })
export class Appreciation {
  @PrimaryKey()
  id: number;

  @ManyToOne(() => Session)
  session: Session;

  @ManyToOne(() => User)
  giver: User;

  @ManyToOne(() => User)
  receiver: User;

  @Property({ columnType: 'text' })
  writeup: string;
}
