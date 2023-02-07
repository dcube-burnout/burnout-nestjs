import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { RetrieveSessionsDto } from './dto/retrieve-sessions.dto';
import { SessionsService } from './sessions.service';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  retrieveSessions(@Query() params: RetrieveSessionsDto) {
    return this.sessionsService.findByUser(params.userId);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Post()
  createSession(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionsService.createSession(createSessionDto, createSessionDto.userId);
  }

  @Get(':id')
  getSession(@Param('id') id: string) {
    return this.sessionsService.findById(Number(id));
  }
}
