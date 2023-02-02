import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { Team } from './entities/team.entity';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';

@Module({
  imports: [MikroOrmModule.forFeature([Team]), UsersModule],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
