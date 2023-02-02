import { EntityData } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersRepository } from './entities/users.repository';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: UsersRepository) {}
  async update(createEntryDto: EntityData<User>[]) {
    return this.userRepository.upsertMany(createEntryDto);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: number) {
    return this.userRepository.find({ id });
  }
}
