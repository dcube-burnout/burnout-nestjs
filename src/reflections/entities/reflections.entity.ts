import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
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

	// @OneToOne(() => Burnout_inv, (burnout_inv) => burnout_inv.id)
	// burnout_inv_id = new Collection<Burnout_inv>(this);

	@Property()
	achievements: string;
}
