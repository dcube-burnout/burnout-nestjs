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
  exhaustion: number;

  @Property()
  depersonalisation: number;

  @Property()
  fulfilment: number;

  @Enum(() => BurnoutStages)
  overall: BurnoutStages;

  @OneToOne(() => Reflection, (r) => r.burnout_inv_id)
  reflection: Reflection;

  constructor(responseStr: string) {
    this.setResponses(responseStr);

    this.setSectionScores();

    this.setOverallScore();
  }

  setResponses(responseStr: string) {
    this.responses = responseStr.split(',').map(Number);
  }

  setSectionScores() {
    this.exhaustion = this.responses.slice(0, 7).reduce((a, b) => a + b);
    this.depersonalisation = this.responses.slice(7, 14).reduce((a, b) => a + b);
    this.fulfilment = this.responses.slice(14).reduce((a, b) => a + b);
  }

  setOverallScore() {
    const burnoutStage = this.exhaustion <= 17 ? 0 : this.exhaustion > 30 ? 2 : 1;
    const depersStage = this.depersonalisation <= 17 ? 0 : this.depersonalisation > 30 ? 2 : 1;
    const personalStage = this.fulfilment <= 17 ? 0 : this.fulfilment > 30 ? 2 : 1;

    const overallStage = Math.max(burnoutStage, depersStage, personalStage);

    this.overall =
      overallStage == 0
        ? BurnoutStages.green
        : overallStage == 1
        ? BurnoutStages.orange
        : BurnoutStages.red;
  }
}
