import { Module } from '@nestjs/common';
import { ReflectionsService } from './reflections.service';
import { ReflectionsController } from './reflections.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Reflection } from './entities/reflections.entity';
import { BurnoutInv } from './entities/burnout-inv.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [MikroOrmModule.forFeature([Reflection, BurnoutInv]), UsersModule],
  controllers: [ReflectionsController],
  providers: [ReflectionsService],
  exports: [ReflectionsService],
})
export class ReflectionsModule {}
