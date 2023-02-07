import { Entity, Enum, PrimaryKey, Property, OneToOne } from '@mikro-orm/core';
import { BurnoutInvRepository } from './burnout-inv.repository';
import { Reflection } from './reflections.entity';

export enum BurnoutStages {
  green,
  orange,
  red,
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

  @OneToOne(() => Reflection, (r) => r.burnout_inv_id, { nullable: true })
  reflection?: Reflection;
}
