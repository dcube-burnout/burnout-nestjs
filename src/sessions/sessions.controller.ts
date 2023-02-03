import { Controller, Get, UseGuards, Req, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateSessionsDto } from './dto/create-sessions.dto';
import { SessionsService } from './sessions.service';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findByUser(@Req() _req: Express.Request) {
    const userId = 1;
    return this.sessionsService.findByUser(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  createSession(@Body() createSessionDto: CreateSessionsDto) {
    console.log(createSessionDto);
    const userId = 1;
    return this.sessionsService.createSession(createSessionDto, userId);
  }
}
