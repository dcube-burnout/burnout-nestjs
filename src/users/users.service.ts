import { EntityData } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Team } from 'src/teams/entities/team.entity';
import { User } from './entities/user.entity';
import { UsersRepository } from './entities/users.repository';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: UsersRepository) {}
  async update(createEntryDto: EntityData<User>[]) {
    return this.userRepository.upsertMany(createEntryDto);
  }

  async addTeams(userId:number, team: Team){
    const user = await this.userRepository.findOne({ id: userId });
    user.team = team;
    await this.userRepository.persistAndFlush(user); 
    return user
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: number) {
    return this.userRepository.find({ id });
  }
}
