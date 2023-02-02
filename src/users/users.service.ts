import { EntityData } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersRepository } from './entities/users.repository';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly entryRepository: UsersRepository) {}
  async update(createEntryDto: EntityData<User>[]) {
    return this.entryRepository.upsertMany(createEntryDto);
  }

  findAll() {
    return this.entryRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} entry`;
  }
}
