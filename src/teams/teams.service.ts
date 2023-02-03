import { EntityData } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AddUserDto } from './dto/create-teams.dto';
import { Team } from './entities/team.entity';
import { TeamRepository } from './entities/team.repository';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team) private readonly teamRepository: TeamRepository,
    private readonly userService: UsersService,
  ) {}

  async create(createEntryDto: EntityData<Team>) {
    const team = this.teamRepository.create(createEntryDto);
    await this.teamRepository.flush();
    return team;
  }

  async addUser(addUserDto: AddUserDto) {
    const team = await this.findOne(addUserDto.team_id);
    return this.userService.addTeams(addUserDto.userId, team);
  }

  findAll() {
    return this.teamRepository.findAll({ populate: ['users'] });
  }

  findOne(id: number) {
    return this.teamRepository.findOne({ id }, { populate: ['users'] });
  }
}
