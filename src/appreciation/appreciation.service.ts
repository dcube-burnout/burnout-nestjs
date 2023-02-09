import { EntityData } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateAppreciationDto } from './dto/create-appreciation.dto';
import { Appreciation } from './entities/appreciation.entity';
import { AppreciationRepository } from './appreciation.repository';

@Injectable()
export class AppreciationService {
  constructor(
    @InjectRepository(Appreciation)
    private readonly appreciationRepo: AppreciationRepository,
  ) {}
  create(dto: CreateAppreciationDto, userId: number) {
    const appreciation: EntityData<Appreciation> = {
      receiver: dto.receiverId,
      giver: userId,
      writeup: dto.writeup,
    };

    return this.appreciationRepo.createAppreciation(appreciation);
  }

  retrieve(userId: number) {
    return this.appreciationRepo.find({ receiver: userId });
  }

  get(id: number) {
    return this.appreciationRepo.find({ id });
  }
}
