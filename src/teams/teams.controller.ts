import { Controller, Get, Post, Body } from '@nestjs/common';
import { AddUserDto, CreateTeamsDto } from './dto/create-teams.dto';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  create(@Body() createEntryDto: CreateTeamsDto) {
    return this.teamsService.create(createEntryDto);
  }

  @Post('/user')
  addUser(@Body() addUserDto: AddUserDto) {
    return this.teamsService.addUser(addUserDto);
  }

  @Get()
  findAll() {
    return this.teamsService.findAll();
  }
}
