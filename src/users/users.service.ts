import { EntityData } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Team } from 'src/teams/entities/team.entity';
import { User } from './entities/user.entity';
import { UsersRepository } from './entities/users.repository';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: UsersRepository) {}
  async create(createEntryDto: EntityData<User>) {
    const user = this.userRepository.create(createEntryDto);
    await this.userRepository.flush();
    return user;
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

  findOne(login: string) {
    return this.userRepository.findOne({ login });
  }
}
