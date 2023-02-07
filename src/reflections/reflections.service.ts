import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityData } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { SessionsService } from 'src/sessions/sessions.service';
import { UsersService } from 'src/users/users.service';
import { CreateReflectionsDto } from './dto/create-reflections.dto';
import { Reflection } from './entities/reflections.entity';
import { BurnoutInv, BurnoutStages } from './entities/burnout-inv.entity';
import { ReflectionsRepository } from './entities/reflections.repository';
import { BurnoutInvRepository } from './entities/burnout-inv.repository';

@Injectable()
export class ReflectionsService {
	constructor(
		@InjectRepository(Reflection) private readonly reflectionRepository: ReflectionsRepository,
		@InjectRepository(BurnoutInv) private readonly burnoutInvRepository: BurnoutInvRepository,
		private readonly userService: UsersService,
		private readonly sessionsService: SessionsService,
	) { }
	findByUser(id: number) {
		return this.reflectionRepository.find({ id });
	}

	findOneById(id: number) {
		return this.reflectionRepository.findOne({ id });
	}

	createBurnoutInventoryObj(responseStr: string): EntityData<BurnoutInv> {
		const responses = responseStr.split(',').map(Number);
		const burnoutScore = responses.slice(0, 7).reduce((a, b) => a + b);
		const depersScore = responses.slice(7, 14).reduce((a, b) => a + b);
		const personalScore = responses.slice(14).reduce((a, b) => a + b);

		const burnoutStage = burnoutScore <= 17 ? 0 : burnoutScore > 30 ? 2 : 1;
		const depersStage = depersScore <= 17 ? 0 : depersScore > 30 ? 2 : 1;
		const personalStage = personalScore <= 17 ? 0 : personalScore > 30 ? 2 : 1;

		const overallScore = Math.max(burnoutStage, depersStage, personalStage);
		const overallStage = overallScore == 0 ? BurnoutStages.green : overallScore == 1 ? BurnoutStages.orange : BurnoutStages.red;

		return {
			responses,
			exhaution: burnoutStage,
			depersonalisation: depersStage,
			fulfilment: personalStage,
			overall: overallStage
		}
	}

	async createReflection(createReflectionsDto: CreateReflectionsDto, userId: number) {
		const user = await this.userService.findOneById(userId);

		const burnoutInvData = this.createBurnoutInventoryObj(createReflectionsDto.responses);
		const burnoutInv = this.burnoutInvRepository.create(burnoutInvData)

		const reflectionData = {
			session: createReflectionsDto.session,
			achievements: createReflectionsDto.achievements,
			user: user.id,
			burnout_inv_id: burnoutInv
		};

		const reflection = this.reflectionRepository.create(reflectionData);
		await this.reflectionRepository.persistAndFlush([burnoutInv, reflection]);

		return reflection;
	}
}