import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { SessionsService } from 'src/sessions/sessions.service';
import { UsersService } from 'src/users/users.service';
import { CreateReflectionsDto } from './dto/create-reflections';
import { Reflection } from './entities/reflections.entity';
import { ReflectionsRepository } from './entities/reflections.repository';

@Injectable()
export class ReflectionsService {
	constructor(
		@InjectRepository(Reflection) private readonly reflectionRepository: ReflectionsRepository,
		private readonly userService: UsersService,
		private readonly sessionsService: SessionsService,
	) { }
	findByUser(id: number) {
		return this.reflectionRepository.find({ id });
	}

	findOneById(id: number) {
		return this.reflectionRepository.find({ id });
	}

	async createReflection(createReflectionsDto: CreateReflectionsDto, userId: number, sessionId: number) {
		const user = await this.userService.findOneById(userId);
		const session = await this.sessionsService.findOneById(sessionId);
		const reflectionObj = {
			...createReflectionsDto,
			user: user.id,
			session: session.id,
		};
		const reflection = this.reflectionRepository.create(reflectionObj);
		await this.reflectionRepository.flush();

		return reflection;
	}
}