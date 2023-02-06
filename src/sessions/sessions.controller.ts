import { Controller, Get, UseGuards, Req, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateSessionsDto } from './dto/create-sessions.dto';
import { SessionsService } from './sessions.service';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findByUser(@Req() req: Express.Request) {
    const userId = (req.user as any).userId;
    return this.sessionsService.findByUser(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  createSession(@Body() createSessionDto: CreateSessionsDto, @Req() req: Express.Request) {
    console.log(createSessionDto);
    const userId = (req.user as any).userId;
    return this.sessionsService.createSession(createSessionDto, userId);
  }
}
