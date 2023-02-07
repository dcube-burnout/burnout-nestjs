import { Entity, Enum, ManyToOne, PrimaryKey, Property, OneToOne } from '@mikro-orm/core';
import { Team } from 'src/teams/entities/team.entity';
import { BurnoutInvRepository } from './burnout-inv.repository';
import { Reflection } from './reflections.entity';

export enum BurnoutStages {
	green,
	orange,
	red
}

@Entity({ repository: () => BurnoutInvRepository })
export class BurnoutInv {
	@PrimaryKey()
	id!: number;

	@Property()
	responses: number[];

	@Property()
	exhaution: number;

	@Property()
	depersonalisation: number;

	@Property()
	fulfilment: number;

	@Enum(() => BurnoutStages)
	overall: BurnoutStages;

	@OneToOne(() => Reflection, { nullable: true })
	reflection?: Reflection
}
