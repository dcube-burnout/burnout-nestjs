import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { SessionRepository } from './entities/session.repository';
import { Session, Progress } from './entities/session.entity';
import { UsersService } from 'src/users/users.service';
import { CreateSessionDto } from './dto/create-session.dto';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session) private readonly sessionRepository: SessionRepository,
    private readonly userService: UsersService,
  ) {}
  findByUser(id: number) {
    return this.sessionRepository.find({ team: { users: { id } } });
  }

  findOneById(id: number) {
    return this.sessionRepository.findOne({ id }, { populate: ['team.id'] });
  }

  async createSession(createSessionDto: CreateSessionDto, userId: number) {
    const user = await this.userService.findOneById(userId);
    const sessionObj = {
      ...createSessionDto,
      team: user.team,
      date: new Date(),
      progress: Progress.inProgress,
    };
    const session = this.sessionRepository.create(sessionObj);
    await this.sessionRepository.flush();

    return session;
  }
}
