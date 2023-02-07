import { Collection, Entity, ManyToOne, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { BurnoutInv } from './burnout-inv.entity';
import { Session } from 'src/sessions/entities/session.entity';
import { User } from 'src/users/entities/user.entity';

@Entity({})
export class Reflection {
	@PrimaryKey()
	id!: number;

	@ManyToOne(() => Session)
	session!: Session;

	@ManyToOne(() => User)
	user!: User;

	@OneToOne(() => BurnoutInv, (burnoutInv) => burnoutInv.reflection, { owner: true })
	burnout_inv_id: BurnoutInv;

	@Property()
	achievements: string;
}
