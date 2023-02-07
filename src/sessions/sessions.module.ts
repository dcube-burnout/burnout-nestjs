import { Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Session } from './entities/session.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [MikroOrmModule.forFeature([Session]), UsersModule],
  controllers: [SessionsController],
  providers: [SessionsService],
  exports: [SessionsService],
})
export class SessionsModule {}
