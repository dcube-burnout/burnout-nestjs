import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { SessionsService } from 'src/sessions/sessions.service';
import { UsersService } from 'src/users/users.service';
import { CreateReflectionDto } from './dto/create-reflection.dto';
import { Reflection } from './entities/reflections.entity';
import { BurnoutInv } from './entities/burnout-inv.entity';
import { ReflectionsRepository } from './entities/reflections.repository';
import { BurnoutInvRepository } from './entities/burnout-inv.repository';

@Injectable()
export class ReflectionsService {
  constructor(
    @InjectRepository(Reflection) private readonly reflectionRepository: ReflectionsRepository,
    @InjectRepository(BurnoutInv) private readonly burnoutInvRepository: BurnoutInvRepository,
    private readonly userService: UsersService,
    private readonly sessionsService: SessionsService,
  ) {}
  findByUser(id: number) {
    return this.reflectionRepository.find({ id });
  }

  findOneById(id: number) {
    return this.reflectionRepository.findOne({ id });
  }

  async createReflection(createReflectionDto: CreateReflectionDto, userId: number) {
    const user = await this.userService.findOneById(userId);

    const burnoutInv = new BurnoutInv(createReflectionDto.responses);

    const reflectionData = {
      session: createReflectionDto.session,
      achievements: createReflectionDto.achievements,
      user: user.id,
      burnout_inv_id: burnoutInv,
    };

    const reflection = this.reflectionRepository.create(reflectionData);
    await this.reflectionRepository.persistAndFlush([burnoutInv, reflection]);

    return reflection;
  }
}
